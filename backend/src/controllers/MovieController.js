const MovieRepository = require('../repositories/MovieRepository')

module.exports = {
  async get(req, res) {
    const movieRepository = new MovieRepository()
    const movies = await movieRepository.get()
    return res.json(movies)
  },

  async getByFilter(req, res) {
    const movieRepository = new MovieRepository()
    const movies = await movieRepository.getByFilters(req.query)
    return res.json(movies)
  },

  async create(req, res) {
    const movieRepository = new MovieRepository()
    const { id } = await movieRepository.create(req.body)
    return res.json({ id })
  },

  async delete(req, res) {
    const movieRepository = new MovieRepository()
    const { id } = req.params
    await movieRepository.delete(id)
    return res.send()
  }
}

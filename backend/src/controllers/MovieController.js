const MovieRepository = require('../repositories/MovieRepository')

module.exports = {
  async getByFilter(req, res) {
    const movieRepository = new MovieRepository()
    const movies = await movieRepository.getByFilters(req.query)
    return res.json(movies)
  },

  async create(req, res) {
    // const { name, year, evaluation, description } = req.body
    // const photo = `/${req.file.path}`
    
    // const movie = {
    //   name,
    //   year,
    //   evaluation,
    //   description,
    //   photo
    // }
    const movieRepository = new MovieRepository()
    const { id } = await movieRepository.create(req.body)
    // const { id } = await movieRepository.create(movie)
    return res.json({ id })
  },

  async delete(req, res) {
    const movieRepository = new MovieRepository()
    const { id } = req.params
    await movieRepository.delete(id)
    return res.send()
  }
}

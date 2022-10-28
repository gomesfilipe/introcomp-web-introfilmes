const connection = require('../database/connection')

module.exports = class moviesRepository {
  async create(movie) {
    const { name, description, year, evaluation, photo } = movie

    const [id] = await connection('movies').insert({
      name,
      description,
      year,
      evaluation,
      photo
    })

    return { id }
  }

  async get() {
    const movies = await connection('movies')
    return movies
  }

  async delete(id) {
    await connection('movies')
      .where('id', id)
      .delete()
    
    return
  }
}

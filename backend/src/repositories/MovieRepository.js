const connection = require('../database/connection')

module.exports = class movieRepository {
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

  async getByFilters(filters) {
    const { name, evaluationDown, evaluationUp, yearDown, yearUp } = filters
    const movies = await connection('movies')
      .where(query => {
        if(yearDown) query.where('year', '>=', yearDown)
        if(yearUp) query.where('year', '<', yearUp)
        if(evaluationDown) query.where('evaluation', '>=', evaluationDown)
        if(evaluationUp) query.where('evaluation', '<=', evaluationUp)
        if(name) query.where('name', 'like', `${name}%`)
      })
    
    return movies
  }

  async delete(id) {
    await connection('movies')
      .where('id', id)
      .delete()
    return
  }
}

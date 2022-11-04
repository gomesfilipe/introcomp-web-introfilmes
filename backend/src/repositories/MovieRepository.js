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

  async getByFilters(filters) {
    const { name, evaluationDown, evaluationUp, yearDown, yearUp } = filters
    const movies = await connection('movies')
      .where(query => {
        if(yearDown) query.where('year', '>=', yearDown)
        if(yearUp) query.where('year', '<', yearUp)
        if(evaluationDown || evaluationDown === 0) query.where('evaluation', '>=', evaluationDown)
        if(evaluationUp || evaluationUp === 0) query.where('evaluation', '<=', evaluationUp)
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

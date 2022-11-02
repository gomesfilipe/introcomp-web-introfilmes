const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
  create(req, res, next) {
    const validationMiddleware = celebrate({
      [Segments.BODY]: Joi.object().keys({
        name: Joi.string().required(),
        description: Joi.string().required(),
        year: Joi.number().integer().positive().required(),
        evaluation: Joi.number().integer().min(0).max(5).required(),
        photo: Joi.string().regex(/^(data:image\/(png|jpg|jpeg)\;base64|)/).required()
      })
    })

    validationMiddleware(req, res, next)
  },

  getByFilter(req, res, next) {
    const validationMiddleware = celebrate({
      [Segments.QUERY]: Joi.object().keys({
        yearDown: Joi.number().integer().positive(),
        yearUp: Joi.number().integer().positive(),
        evaluationDown: Joi.number().integer().min(0).max(5),
        evaluationUp: Joi.number().integer().min(0).max(5),
        name: Joi.string().allow('')
      })
    })

    validationMiddleware(req, res, next)
  }
}

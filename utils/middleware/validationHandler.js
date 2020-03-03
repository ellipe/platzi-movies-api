const boom = require('@hapi/boom')
const Joi = require('@hapi/joi')

function validate(schema, data) {
  const { error } = Joi.object(schema).validate(data, { abortEarly: false })

  return error
}

function validationHandler(schema, check = 'body') {
  return function(req, res, next) {
    const error = validate(schema, req[check])
    error ? next(boom.badRequest(error)) : next()
  }
}

module.exports = validationHandler

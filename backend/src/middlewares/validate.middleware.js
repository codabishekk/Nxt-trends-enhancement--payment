import {sendResponse} from '../utils/response.util.js'

export const validate = schema => (req, res, next) => {
  const {error} = schema.validate(req.body)
  if (error) {
    console.error('Validation Error:', error.details[0].message)
    return sendResponse(res, 400, error.details[0].message)
  }
  next()
}

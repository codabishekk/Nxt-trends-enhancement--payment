import {sendResponse} from '../utils/response.util.js'

export const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next()
  } else {
    sendResponse(res, 403, 'Admin access required')
  }
}

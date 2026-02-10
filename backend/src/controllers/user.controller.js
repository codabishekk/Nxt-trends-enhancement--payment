import {sendResponse} from '../utils/response.util.js'

export const getUsers = async (req, res) => {
  sendResponse(res, 200, 'Users fetched')
}

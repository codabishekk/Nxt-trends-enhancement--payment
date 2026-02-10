import {sendResponse} from '../utils/response.util.js'

export const getAdminStats = async (req, res) => {
  sendResponse(res, 200, 'Admin stats fetched')
}

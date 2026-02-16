import * as authService from '../services/auth.service.js'
import {sendResponse} from '../utils/response.util.js'

export const register = async (req, res) => {
  try {
    const {user, token} = await authService.registerUser(req.body)
    sendResponse(res, 201, 'User registered successfully', {user, token})
  } catch (error) {
    sendResponse(res, 400, error.message)
  }
}

export const login = async (req, res) => {
  try {
    const {email, password} = req.body
    const {user, token} = await authService.loginUser(email, password)
    sendResponse(res, 200, 'Login successful', {user, token})
  } catch (error) {
    sendResponse(res, 401, error.message)
  }
}

import User from '../models/User.model.js'
import {hashPassword, comparePassword} from '../utils/password.util.js'
import {generateToken} from '../utils/jwt.util.js'

export const registerUser = async userData => {
  const {name, email, password} = userData

  const existingUser = await User.findOne({email})
  if (existingUser) {
    throw new Error('User already exists')
  }

  const hashedPassword = await hashPassword(password)
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  })

  const token = generateToken(user._id)
  return {user, token}
}

export const loginUser = async (email, password) => {
  const user = await User.findOne({email})
  if (!user) {
    throw new Error('Invalid credentials')
  }

  const isMatch = await comparePassword(password, user.password)
  if (!isMatch) {
    throw new Error('Invalid credentials')
  }

  const token = generateToken(user._id)
  return {user, token}
}

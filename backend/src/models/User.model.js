import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
  {
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    gender: {type: String},
    preferences: {
      colors: [String],
      occasions: [String],
    },
    role: {type: String, default: 'user'},
  },
  {timestamps: true},
)

export default mongoose.model('User', userSchema)

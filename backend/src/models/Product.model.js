import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    title: String,
    category: String,
    gender: String,
    price: Number,
    colors: [String],
    sizes: [String],
    occasion: String,
    images: [String],
    rating: {type: Number, default: 0},
  },
  {timestamps: true},
)

export default mongoose.model('Product', productSchema)

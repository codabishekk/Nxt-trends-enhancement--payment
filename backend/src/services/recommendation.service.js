import Product from '../models/Product.model.js'

const recommendProducts = async ({gender, occasion, colors}) => {
  return await Product.find({
    gender,
    occasion,
    colors: {$in: colors},
  }).limit(6)
}

export default recommendProducts

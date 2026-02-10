import Product from '../models/Product.model.js'

export const getProducts = async (req, res) => {
  const products = await Product.find()
  res.json(products)
}

export const createProduct = async (req, res) => {
  const product = await Product.create(req.body)
  res.json(product)
}

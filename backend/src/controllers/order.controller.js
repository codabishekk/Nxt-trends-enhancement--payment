import Order from '../models/Order.model.js'

export const createOrder = async (req, res) => {
  const order = await Order.create({
    userId: req.user.id,
    products: req.body.products,
    totalPrice: req.body.totalPrice,
  })
  res.json(order)
}

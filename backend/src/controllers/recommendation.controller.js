import recommendProducts from '../services/recommendation.service.js'

export const getRecommendations = async (req, res) => {
  const products = await recommendProducts(req.body)
  res.json(products)
}

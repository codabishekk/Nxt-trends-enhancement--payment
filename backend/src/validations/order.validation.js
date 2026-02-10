import Joi from 'joi'

export const orderSchema = Joi.object({
  items: Joi.array().min(1).required(),
})

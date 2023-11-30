import Joi from "joi";

export const productsSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    imageUrl: Joi.string().uri().required(),
    description: Joi.string().min(10).required(),
    price: Joi.number().positive().required(),
    categoryId: Joi.string().required(),
});

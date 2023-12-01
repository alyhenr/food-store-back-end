import Joi from "joi";

export const ordersSchema = Joi.object({
    clientId: Joi.string().required(),
    productId: Joi.string().required(),
    quantity: Joi.number().positive(),
    total: Joi.number().positive(),
    observations: Joi.string(),
    additionals: Joi.array().items(Joi.string()),
});

export const ordersIdSchema = Joi.object({
    id: Joi.string().required(),
});

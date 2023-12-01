import Joi from "joi";

export const additionalsSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    description: Joi.string().min(3).required(),
    imageUrl: Joi.string().uri().required(),
    price: Joi.number().positive().required(),
});

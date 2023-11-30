import Joi from "joi";

export const additionalsSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    price: Joi.number().positive().required(),
});

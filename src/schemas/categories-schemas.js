import Joi from "joi";

export const categoriesSchema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    imageUrl: Joi.string().uri().required(),
});

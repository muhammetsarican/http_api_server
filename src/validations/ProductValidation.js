import Joi from "joi";

const createValidation = Joi.object({
    title: Joi.string().required(),
    keyword: Joi.string().min(10),
    description: Joi.string().min(10)
})

export {
    createValidation
}
import Joi from "joi";

const createValidation = Joi.object({
    fname: Joi.string().min(2),
    lname: Joi.string().min(2),
    mail: Joi.string().email().required(),
    password: Joi.string().min(8).required()
})

export const schemas = {
    createValidation
}
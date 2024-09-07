import Joi from "joi";

const createValidation = Joi.object({
    fname: Joi.string().min(2),
    lname: Joi.string().min(2),
    mail: Joi.string().email().required(),
    password: Joi.string().min(8).required()
})

const updateValidation = Joi.object({
    fname: Joi.string().min(2),
    lname: Joi.string().min(2),
    mail: Joi.string().email(),
    password: Joi.string().min(8)
})

const loginValidation = Joi.object({
    mail: Joi.string().email().required(),
    password: Joi.string().min(8).required()
})

const registerValidation = Joi.object({
    fname: Joi.string().min(2),
    lname: Joi.string().min(2),
    mail: Joi.string().email().required(),
    password: Joi.string().min(8).required()
})

export const schemas = {
    createValidation,
    updateValidation,
    loginValidation,
    registerValidation
}
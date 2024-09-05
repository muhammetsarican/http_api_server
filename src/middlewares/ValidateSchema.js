import CustomError from "../helpers/CustomErrorMessage.js";

export default (schema) => (req, res, next) => {
    const { value, error } = schema.validate(req.body);

    if (error) next(() => {
        const err = error.details.map(detail => detail.message).join(", ");
        res.status(400).send(new CustomError(err));
        return new Error(err);
    })

    next();
}
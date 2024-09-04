import jwt from "jsonwebtoken";
import UserService from "../services/UserService.js";
import CustomError from "../helpers/CustomErrorMessage.js";

export default (req, res, next) => {
    if (req?.headers) {
        const token = req.headers["authorization"].split(" ")[1];

        jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
            if (err) return next(() => {
                res.status(403).send(new CustomError(err.message));
                return new Error(err.message)
            });
            UserService.findOne({
                _idr: user._id
            })
                .then(response => {
                    req.user = response;
                })
                .catch(err => {
                    return next(() => {
                        res.status(404).send(new CustomError(err, 404))
                        return new Error(err.message)
                    });
                })
        })
    }
}
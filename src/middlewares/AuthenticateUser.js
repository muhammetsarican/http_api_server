import jwt from "jsonwebtoken";
import UserService from "../services/UserService.js";
import CustomError from "../helpers/CustomErrorMessage.js";

import { ObjectId } from "mongodb";

export default (req, res, next) => {
    if (req?.headers) {
        const token = req.headers["authorization"].split(" ")[1];

        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET_KEY, (err, record) => {
            if (err) return next(() => {
                res.status(403).send(new CustomError(err.message));
                return new Error(err.message)
            });
            UserService.findOne({
                _id: new ObjectId(record.insertedId)
            })
                .then(response => {
                    if (!response) return next(() => {
                        res.status(404).send(new CustomError("No records found!"));
                        return new Error("No records found!");
                    })
                    req.user = response;
                    next();
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
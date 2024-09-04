import UserService from "../services/UserService.js";
import { generateAccessToken, generateRefreshToken } from "../utils/GenerateTokens.js";
import HashPassword from "../utils/HashPassword.js";
import BaseController from "./BaseController.js";

import mongodb from "mongodb";

class UserController extends BaseController {
    constructor() {
        super(UserService);
    }

    createOne() {
        return (req, res) => {
            req.body.password = HashPassword(req.body.password);

            UserService.insertOne(req.body)
                .then(response => {
                    res.status(201).send({
                        success: true,
                        message: {
                            user: response,
                            tokens: {
                                access_token: generateAccessToken(response),
                                refresh_token: generateRefreshToken(response)
                            }
                        }
                    })
                })
                .catch(err => {
                    res.status(400).send({
                        success: false,
                        message: err.message
                    })
                })
        }
    }

    update() {
        return (req, res) => {
            if (req.body.password) req.body.password = HashPassword(req.body.password);

            UserService.update({
                _id: new mongodb.ObjectId(req?.params?.id)
            }, {
                $set: req.body
            })
                .then(response => {
                    res.status(200).send({
                        success: true,
                        message: response
                    })
                })
                .catch(err => {
                    res.status(400).send({
                        success: false,
                        message: err.message
                    })
                })
        }
    }
}

export default new UserController();
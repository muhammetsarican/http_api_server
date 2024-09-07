import { createLogger } from "../scripts/logger/index.js";
import UserService from "../services/UserService.js";
import { generateAccessToken, generateRefreshToken } from "../utils/GenerateTokens.js";
import HashPassword from "../utils/HashPassword.js";
import BaseController from "./BaseController.js";

import mongodb from "mongodb";

const UserLogger = createLogger("user");

class UserController extends BaseController {
    constructor() {
        super(UserService, UserLogger);
    }

    createOne() {
        return (req, res) => {
            req.body.password = HashPassword(req.body.password);

            UserService.insertOne(req.body)
                .then(response => {
                    res.status(201).send({
                        success: true,
                        message: response
                    })

                    UserLogger.log("info", response);
                })
                .catch(err => {
                    res.status(400).send({
                        success: false,
                        message: err.message
                    })

                    UserLogger.log("error", err.message);
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

                    UserLogger.log("info", response);
                })
                .catch(err => {
                    res.status(400).send({
                        success: false,
                        message: err.message
                    })

                    UserLogger.log("error", err.message);
                })
        }
    }

    login() {
        return (req, res) => {
            req.body.password = HashPassword(req.body.password);
            UserService.findOne(req.body)
                .then(response => {
                    if (!response) throw new Error("No record found!");
                    res.status(200).send({
                        success: true,
                        message: {
                            user: response,
                            tokens: {
                                access_token: generateAccessToken(response),
                                refresh_token: generateRefreshToken(response)
                            }
                        }
                    })

                    UserLogger.log("info", response);
                })
                .catch(err => {
                    res.status(400).send({
                        success: false,
                        message: err.message
                    })

                    UserLogger.log("error", err.message);
                })
        }
    }

    register() {
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

                    UserLogger.log("info", response);
                })
                .catch(err => {
                    res.status(400).send({
                        success: false,
                        message: err.message
                    })

                    UserLogger.log("error", err.message);
                })
        }
    }
}

export default new UserController();
import mongodb from "mongodb"

class BaseController {
    constructor(Service, Logger) {
        this.Service = Service;
        this.Logger = Logger;
    }

    createOne() {
        return (req, res) => {
            this.Service.insertOne(req.body)
                .then(response => {
                    res.status(201).send({
                        success: true,
                        message: response
                    })

                    this.Logger.log("info", response);
                })
                .catch(err => {
                    res.status(400).send({
                        success: false,
                        message: err.message
                    })

                    this.Logger.log("error", err.message);
                })
        }
    }

    readOne() {
        return (req, res) => {
            this.Service.findOne({
                _id: new mongodb.ObjectId(req?.params?.id)
            })
                .then(response => {
                    res.status(200).send({
                        success: true,
                        message: response
                    })

                    this.Logger.log("info", response);
                })
                .catch(err => {
                    res.status(400).send({
                        success: false,
                        message: err.message
                    })

                    this.Logger.log("error", err.message);
                })
        }
    }

    read() {
        return (req, res) => {
            this.Service.find()
                .then(response => {
                    res.status(200).send({
                        success: true,
                        message: response
                    })

                    this.Logger.log("info", response);
                })
                .catch(err => {
                    res.status(400).send({
                        success: false,
                        message: err.message
                    })

                    this.Logger.log("error", err.message);
                })
        }
    }

    update() {
        return (req, res) => {
            this.Service.update({
                _id: new mongodb.ObjectId(req?.params?.id)
            }, {
                $set: req.body
            })
                .then(response => {
                    res.status(200).send({
                        success: true,
                        message: response
                    })

                    this.Logger.log("info", response);
                })
                .catch(err => {
                    res.status(400).send({
                        success: false,
                        message: err.message
                    })

                    this.Logger.log("error", err.message);
                })
        }
    }

    delete() {
        return (req, res) => {
            this.Service.delete({
                _id: new mongodb.ObjectId(req?.params?.id)
            })
                .then(response => {
                    res.status(200).send({
                        success: true,
                        message: response
                    })

                    this.Logger.log("info", response);
                })
                .catch(err => {
                    res.status(400).send({
                        success: false,
                        message: err.message
                    })

                    this.Logger.log("error", err.message);
                })
        }
    }
}

export default BaseController;
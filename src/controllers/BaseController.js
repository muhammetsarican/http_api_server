import mongodb from "mongodb"

class BaseController {
    constructor(Service) {
        this.Service = Service;
    }

    createOne() {
        return (req, res) => {
            this.Service.insertOne(req.body)
                .then(response => {
                    res.status(201).send({
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

    readOne() {
        return (req, res) => {
            this.Service.findOne({ title: "Product 1" })
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

    read() {
        return (req, res) => {
            this.Service.find()
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
                })
                .catch(err => {
                    res.status(400).send({
                        success: false,
                        message: err.message
                    })
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

export default BaseController;
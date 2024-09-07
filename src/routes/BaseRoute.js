import AuthenticateUser from "../middlewares/AuthenticateUser.js";
import ValidateSchema from "../middlewares/ValidateSchema.js";
import Router from "../modules/server/Router.js";

class BaseRoute {
    constructor(Controller, schemas, PrevRouter = new Router()) {
        this.Controller = Controller;
        this.schemas = schemas;
        this.Router = PrevRouter;
    }

    read() {
        this.Router.route("/read").get(AuthenticateUser, this.Controller.read());
    }

    readOne() {
        this.Router.route("/readOne/:id").get(AuthenticateUser, this.Controller.readOne());
    }

    create() {
        this.Router.route("/create").post(AuthenticateUser, ValidateSchema(this.schemas.createValidation), this.Controller.createOne());
    }

    update() {
        this.Router.route("/update/:id").patch(AuthenticateUser, ValidateSchema(this.schemas.updateValidation), this.Controller.update());
    }

    delete() {
        this.Router.route("/delete/:id").delete(AuthenticateUser, this.Controller.delete());
    }

    init() {
        this.create();
        this.read();
        this.readOne();
        this.update();
        this.delete();
        return this.Router;
    }
}

export default BaseRoute;
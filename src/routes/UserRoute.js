import UserController from "../controllers/UserController.js"
import ValidateSchema from "../middlewares/ValidateSchema.js";
import { schemas } from "../validations/UserValidation.js";
import BaseRoute from "./BaseRoute.js"

class UserRoute extends BaseRoute {
    constructor() {
        super(UserController, schemas)
    }

    create() {
        this.Router.route("/create").post(ValidateSchema(schemas.createValidation), UserController.createOne());
    }

    init() {
        this.Router = super.init();
        this.create();
        return this.Router;
    }
}

export default new UserRoute();
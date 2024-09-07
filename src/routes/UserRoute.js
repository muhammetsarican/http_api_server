import UserController from "../controllers/UserController.js"
import ValidateSchema from "../middlewares/ValidateSchema.js";
import { schemas } from "../validations/UserValidation.js";
import BaseRoute from "./BaseRoute.js"

class UserRoute extends BaseRoute {
    constructor() {
        super(UserController, schemas)
    }

    login() {
        this.Router.route("/login").post(ValidateSchema(schemas.loginValidation), UserController.login());
    }

    register() {
        this.Router.route("/register").post(ValidateSchema(schemas.registerValidation), UserController.register());
    }

    init() {
        this.Router = super.init();
        this.login();
        this.register();
        return this.Router;
    }
}

export default new UserRoute();
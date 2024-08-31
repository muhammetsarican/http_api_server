import Router from "../modules/server/Router.js";

class BaseRoute {
    constructor(Controller, PrevRouter = new Router()) {
        this.Controller = Controller;
        this.Router = PrevRouter;
    }

    create() {
        this.Router.route("/create").post(this.Controller.createOne());
    }

    read() {
        this.Router.route("/read").get(this.Controller.read());
    }

    readOne() {
        this.Router.route("/readOne").get(this.Controller.readOne());
    }

    init() {
        this.create();
        this.read();
        this.readOne();
        return this.Router;
    }
}

export default BaseRoute;
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

    update() {
        this.Router.route("/update/:id").patch(this.Controller.update());
    }

    delete() {
        this.Router.route("/delete/:id").delete(this.Controller.delete());
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
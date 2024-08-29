"use strict"
import App from "./App.js";

class Router extends App {
    path = "/";
    route(path) {
        this.path = path;
        return this;
    }

    export() {
        delete this.path;
        return this;
    }
}

export default Router;
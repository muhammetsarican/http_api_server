"use strict"
import App from "./App.js";

class Router extends App {
    params = [];
    // this function create new object path as recursively
    parsePath(pathParts, index) {
        if (index + 1 == pathParts.length) {
            return { [pathParts[index]]: {} };
        }

        return { [pathParts[index]]: this.parsePath(pathParts, index + 1) };
    }

    route(path) {
        const routeParams = {};
        const pathParts = path.split("/").map(element => `/${element}`);

        const newPaths = this.parsePath(pathParts.slice(1), 0);

        this.path = Object.keys(newPaths)[0];
        this[this.path] = newPaths[this.path];

        // here get the param routes from created route
        for (const path of pathParts) {
            if (path.length) {
                if (path.includes(":")) routeParams[path.substr(path.indexOf(":") + 1)] = "";
            }
        }
        this[this.path]["params"] = routeParams;
        return this;
    }
}

export default Router;
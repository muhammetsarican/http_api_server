"use strict"

import url from "url";
import http from "http";
import clo from "../../helpers/CustomConsoleLog.js";

class App {
    path = "/";

    preProcess(req, res) {
        this.req = req;

        this.res = res;
        this.res.status = function (statusCode = "200") {
            this.writeHead(statusCode);
            return this;
        };

        this.res.send = function (message) {
            this.end(JSON.stringify(message));
            return this;
        };

        this.reqURL = url.parse(req.url, true);
        this.pathName = this.reqURL.pathname;
        this.reqMethod = req.method;
        this.headers = req.headers;
    }

    initServer() {
        this.server = http.createServer((req, res) => {
            res.setHeader('content-type', 'application/json');

            req.on('data', (chunk) => {
                req.body = [chunk];
            }).on('end', () => {
                if (req.body) req.body = JSON.parse(Buffer.concat(req.body).toString());

                this.preProcess(req, res);

                this.routeTo();
            })
        })
    }

    // this method detects route has any param or not
    findParams(path) {
        if (this.req.params && Object.keys(this.req.params).map(param => {
            if (Object.keys(path).includes(`/:${param}`) && !this.req.params.param) {
                return param
            };
        }).length) return true;

        return false;
    }

    routeTo() {
        const pathParts = this.pathName.split("/").map(element => "/" + element);
        try {
            let mainPath = this;

            for (const part of pathParts) {
                // here set the req params from route 
                if (mainPath.params) this.req.params = mainPath.params;

                // check route part is exist on your route
                if (Object.keys(mainPath).includes(part)) {
                    mainPath = mainPath[part];
                }
                // here check param exist on coming request and assign the object req var
                else if (this.findParams(mainPath)) {
                    const nextPath = Object.keys(mainPath)[0];
                    this.req.params[nextPath.substring(nextPath.indexOf(":") + 1)] = part.substring(part.indexOf("/") + 1);
                    mainPath = mainPath[nextPath];
                }
            }

            try {
                mainPath.middlewares?.map(middleware => {
                    middleware(this.req, this.res, this.next);
                })

                mainPath[this.reqMethod](this.req, this.res);
            }
            catch (err) {
                clo.g(err);
            }
        }
        catch {
            this["/error"](this.res)
        }
    }

    next(cb) {
        throw cb();
    }

    use(path, router) {
        this[this.path] = { ...this[this.path], [path]: router }
        return this;
    }

    addMethodToRightPath(route, method) {
        if (route) {
            if (!Object.keys(route).length) {
                return Object.assign(route, method)
            };
            if (Object.keys(route)[0] != "params") this.addMethodToRightPath(route[Object.keys(route)[0]], method);
            else return Object.assign(route, method);
        }
        return route;
    }

    get(...middlewares) {
        this[this.path] = {
            ...this[this.path],
            middlewares: []
        }
        middlewares.forEach((middleware, index) => {
            if (index === middlewares.length - 1) {
                this[this.path] = this.addMethodToRightPath(this[this.path], { "GET": middleware });
            }
            else {
                this[this.path].middlewares.push(middleware);
            }
        })

        return this;
    }
    post(...middlewares) {
        this[this.path] = {
            ...this[this.path],
            middlewares: []
        }
        middlewares.forEach((middleware, index) => {
            if (index === middlewares.length - 1) {
                this[this.path] = this.addMethodToRightPath(this[this.path], { "POST": middleware });
            }
            else {
                this[this.path].middlewares.push(middleware);
            }
        })

        return this;
    }
    patch(...middlewares) {
        this[this.path] = {
            ...this[this.path],
            middlewares: []
        }
        middlewares.forEach((middleware, index) => {
            if (index === middlewares.length - 1) {
                this[this.path] = this.addMethodToRightPath(this[this.path], { "PATCH": middleware });
            }
            else {
                this[this.path].middlewares.push(middleware);
            }
        })

        return this;
    }
    delete(...middlewares) {
        this[this.path] = {
            ...this[this.path],
            middlewares: []
        }
        middlewares.forEach((middleware, index) => {
            if (index === middlewares.length - 1) {
                this[this.path] = this.addMethodToRightPath(this[this.path], { "DELETE": middleware });
            }
            else {
                this[this.path].middlewares.push(middleware);
            }
        })

        return this;
    }

    error(cb) {
        this["/error"] = cb;
    }

    listen(PORT, cb) {
        this.server.listen(PORT, cb);
    }
}

export default App;

"use strict"

import url from "url";
import http from "http";

class App {
    path = "/";

    initServer() {
        this.server = http.createServer((req, res) => {
            res.setHeader('content-type', 'application/json');
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

            this.routeTo();
        })
    }

    routeTo() {
        const pathParts = new Set(this.pathName.split("/").map(element => "/" + element));
        try {
            let mainPath = this;

            for (const part of pathParts) {
                mainPath = mainPath[part];
            }

            mainPath[this.reqMethod](this.res);
        }
        catch {
            this["/error"](this.res)
        }
    }

    use(path, router) {
        this[this.path] = { ...this[this.path], [path]: router }
        return this;
    }

    get(...middlewares) {
        this[this.path] = { "GET": middlewares[middlewares.length - 1] };
        middlewares.length > 1 && middlewares.forEach(middleware => {
            middleware(req, res);
        })
        return this;
    }
    post(...middlewares) {
        this[this.path] = { "POST": middlewares[middlewares.length - 1] };
        middlewares.length > 1 && middlewares.forEach(middleware => {
            middleware(req, res);
        })
        return this;
    }
    patch(...middlewares) {
        this[this.path] = { "PATCH": middlewares[middlewares.length - 1] };
        middlewares.length > 1 && middlewares.forEach(middleware => {
            middleware(req, res);
        })
        return this;
    }
    delete(...middlewares) {
        this[this.path] = { "DELETE": middlewares[middlewares.length - 1] };
        middlewares.length > 1 && middlewares.forEach(middleware => {
            middleware(req, res);
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

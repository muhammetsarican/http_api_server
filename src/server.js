import "dotenv/config"
import App from "./App/App.js";
import Router from "./App/Router.js";
import ApiError from "./error/ApiError.js";

const app = new App();
app.initServer();

app.get((res) => { res?.end("get router") })

const BaseRouter = new Router();
BaseRouter.route("/user").get((res) => { res.end("get base router") });

app.use("/BaseRouter", BaseRouter);

app.error(ApiError(404, {
    success: false,
    message: "Sorry, the page that you've searched not found!."
}));

const PORT = process.env.SERVER_PORT;


app.listen(PORT, () => {
    process.env.NODE_ENV == "development" && console.log(`Server running on ${PORT} port.`)
})
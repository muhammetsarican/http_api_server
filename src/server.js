import "dotenv/config"
import App from "./App/App.js";
import Router from "./App/Router.js";
import ApiError from "./error/ApiError.js";

const app = new App();
app.initServer();

app.get((res) => {
    res.status(200).send({
        success: true,
        message: "Welcome my custom server"
    })
})

app.error(ApiError(404, {
    success: false,
    message: "Sorry, the page that you've searched not found!."
}));

const PORT = process.env.SERVER_PORT;


app.listen(PORT, () => {
    process.env.NODE_ENV == "development" && console.log(`Server running on ${PORT} port.`)
})
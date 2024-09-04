import App from "./modules/server/App.js";
import ApiError from "./error/ApiError.js";

import "dotenv/config"
import database from "./loaders/database/index.js";

import ProductRoute from "./routes/ProductRoute.js";
import clo from "./helpers/CustomConsoleLog.js";
import UserRoute from "./routes/UserRoute.js";

// database connection
database();

// server modules creates
const app = new App();

// new server inialized
app.initServer();

// welcome route created
app.get((res) => {
    res.status(200).send({
        success: true,
        message: "Welcome my custom server"
    })
})

app.use("/product", ProductRoute.init());
app.use("/user", UserRoute.init());

// error route created
app.error(ApiError(404, {
    success: false,
    message: "Sorry, the page that you've searched not found!."
}));

// server port got and server runs the port that you defined
const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
    clo.g(`Server running on ${PORT} port.`)
})
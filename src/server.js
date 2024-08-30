import "dotenv/config"
import ApiError from "./error/ApiError.js";
import database from "./loaders/database/index.js";
import App from "./modules/server/App.js";

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

// error route created
app.error(ApiError(404, {
    success: false,
    message: "Sorry, the page that you've searched not found!."
}));

// server port got and server runs the port that you defined
const PORT = process.env.SERVER_PORT;

app.listen(PORT, () => {
    process.env.NODE_ENV == "development" && console.log(`Server running on ${PORT} port.`)
})
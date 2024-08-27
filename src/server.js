import http from "http";
import "dotenv/config"

const server = http.createServer((req, res) => {
    res.end("Server running!");
})

const PORT = process.env.SERVER_PORT;

server.listen(PORT, () => {
    process.env.NODE_ENV == "development" && console.log(`Server running on ${PORT} port!`);
})
const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Server running!");
})

server.listen(3000, () => {
    console.log("server running on 3000 port");
})
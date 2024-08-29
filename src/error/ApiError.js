export default (statusCode, message) => (res) => {
    res.writeHead(statusCode);
    res.end(JSON.stringify(message));
}
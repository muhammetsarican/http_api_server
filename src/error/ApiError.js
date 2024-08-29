export default (statusCode, message) => (res) => {
    res.status(statusCode).send(message);
}
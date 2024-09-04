import HmacSHA512 from "crypto-js/hmac-sha512.js"

export default (password) => {
    return HmacSHA512(password, process.env.PASSWORD_SECRET_KEY).toString();
}
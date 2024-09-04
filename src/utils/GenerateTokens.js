import jwt from "jsonwebtoken";

const generateAccessToken = (data) => {
    return jwt.sign(data, process.env.ACCESS_TOKEN_SECRET_KEY, { algorithm: "HS512", expiresIn: "120m" });
}

const generateRefreshToken = (data) => {
    return jwt.sign(data, process.env.REFRESH_TOKEN_SECRET_KEY, { algorithm: "HS512", expiresIn: "120m" });
}

export {
    generateAccessToken,
    generateRefreshToken
}
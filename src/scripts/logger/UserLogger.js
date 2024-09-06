import winston from "winston";

export const logger = winston.createLogger({
    level: "info",
    format: winston.format.json(),
    defaultMeta: {
        service: "user-service"
    },
    transports: [
        new winston.transports.File({
            filename: "src/logs/users/error.log",
            level: 'error'
        }),
        new winston.transports.File({
            filename: "src/logs/users/info.log",
            level: "info"
        }),
        new winston.transports.File({
            filename: "src/logs/users/combined.log",
        })
    ]
})
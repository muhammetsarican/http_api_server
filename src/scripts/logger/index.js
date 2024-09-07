import winston from "winston";

class Logger {
    constructor(CollectionName) {
        this.level = "info";
        this.format = winston.format.json();
        this.defaultMeta = {
            service: `${CollectionName}-service`
        };
        this.transports = [
            new winston.transports.File({ filename: `src/logs/${CollectionName}s/error.log`, level: 'error' }),
            new winston.transports.File({ filename: `src/logs/${CollectionName}s/info.log`, level: 'info' }),
            new winston.transports.File({ filename: `src/logs/${CollectionName}s/combined.log` }),
        ]
    }
}

export const createLogger = (name) => winston.createLogger(new Logger(name));
import { MongoClient } from "mongodb";
import clo from "../../helpers/CustomConsoleLog.js";

const dbURI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}`;

const client = new MongoClient(dbURI);

let db = null;

const connectDB = async () => {
    await client.connect();

    db = client.db(process.env.DB_NAME);

    return db;
}

const database = () => {
    return db && db;
}

export {
    database
}

export default () => {
    connectDB()
        .then(() => {
            clo.g("DB connection is successful!");
        })
        .catch((err) => {
            clo.g(`DB connection failed!, ${err}`);
        })
};
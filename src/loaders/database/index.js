import mongoose from "mongoose";

const db = mongoose.connection;

db.once("open", () => {
    process.env.NODE_ENV == "development" && console.log("DB connection is successful!");
})

const connectDB = async () => {
    const dbURI = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
    await mongoose.connect(dbURI);
}

export default () => {
    connectDB();
}
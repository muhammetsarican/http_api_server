import { database as db } from "../loaders/database/index.js";

class BaseService {
    constructor(Collection) {
        this.Collection = Collection;
    }

    async insertOne(data) {
        return await db().collection(this.Collection).insertOne(data);
    }

    async findOne(data) {
        return await db().collection(this.Collection).findOne(data);
    }

    async find() {
        return await db().collection(this.Collection).find({}).toArray();
    }

    async update(where, data) {
        return await db().collection(this.Collection).updateOne(where, data);
    }

    async delete(where) {
        return await db().collection(this.Collection).deleteOne(where);
    }
}

export default BaseService;
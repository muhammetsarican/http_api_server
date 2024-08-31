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
}

export default BaseService;
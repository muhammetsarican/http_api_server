import BaseService from "./BaseService.js";

class ProductService extends BaseService {
    constructor() {
        super("products");
    }
}

export default new ProductService();
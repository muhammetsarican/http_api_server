import BaseController from "./BaseController.js";
import ProductService from "../services/ProductService.js";

import { createLogger } from "../scripts/logger/index.js";

const ProductLogger = createLogger("product");

class ProductController extends BaseController {
    constructor() {
        super(ProductService, ProductLogger);
    }
}

export default new ProductController();
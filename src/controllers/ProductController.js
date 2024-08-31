import BaseController from "./BaseController.js";
import ProductService from "../services/ProductService.js";

class ProductController extends BaseController {
    constructor() {
        super(ProductService);
    }
}

export default new ProductController();
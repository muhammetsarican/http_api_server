import ProductController from "../controllers/ProductController.js";
import Router from "../modules/server/Router.js";
import { createValidation } from "../validations/ProductValidation.js";
import BaseRouter from "./BaseRoute.js";

const ProductRouter = new Router();

class ProductRoute extends BaseRouter {
    constructor() {
        super(ProductController, createValidation, ProductRouter);
    }
}

export default new ProductRoute();
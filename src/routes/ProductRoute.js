import ProductController from "../controllers/ProductController.js";
import Router from "../modules/server/Router.js";
import { schemas } from "../validations/ProductValidation.js";
import BaseRouter from "./BaseRoute.js";

const ProductRouter = new Router();

class ProductRoute extends BaseRouter {
    constructor() {
        super(ProductController, schemas, ProductRouter);
    }
}

export default new ProductRoute();
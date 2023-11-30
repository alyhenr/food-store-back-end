import { Router } from "express";

import { productsController } from "../controllers/index.js";
import { validateBody } from "../middlewares/validation-middleware.js";
import { productsSchema } from "../schemas/products-schemas.js";

const productsRouter = Router();

productsRouter
    .post("/", validateBody(productsSchema), productsController.post)
    .get("/", productsController.getAll);

export { productsRouter };

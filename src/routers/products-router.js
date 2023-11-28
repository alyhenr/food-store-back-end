import { Router } from "express";

import { productsController } from "../controllers/index.js";

const productsRouter = Router();

productsRouter.post("/", productsController.post)

export { productsRouter };
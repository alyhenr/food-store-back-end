import { Router } from "express";

import { ordersController } from "../controllers/index.js";

const ordersRouter = Router();

ordersRouter
    .post("/", ordersController.post)
    .put("/:id", ordersController.updateStatus);

export { ordersRouter };

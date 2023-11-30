import { Router } from "express";

import { ordersController } from "../controllers/index.js";
import { validateBody, validateParams } from "../middlewares/validation-middleware.js";
import { ordersIdSchema, ordersSchema } from "../schemas/orders-schemas.js";

const ordersRouter = Router();

ordersRouter
    .post("/", validateBody(ordersSchema), ordersController.post)
    .put("/:id", validateParams(ordersIdSchema), ordersController.updateStatus);

export { ordersRouter };

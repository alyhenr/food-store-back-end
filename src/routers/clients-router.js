import { Router } from "express";

import { clientsController } from "../controllers/index.js";
import { validateBody } from "../middlewares/validation-middleware.js";
import { clientsSchema } from "../schemas/clients-schemas.js";

const clientsRouter = Router();

clientsRouter
    .post("/", validateBody(clientsSchema), clientsController.post)
    .get("/", clientsController.get);

export { clientsRouter };

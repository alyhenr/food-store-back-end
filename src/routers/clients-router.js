import { Router } from "express";

import { clientsController } from "../controllers/clients-controller.js";

const clientsRouter = Router();

clientsRouter.post("/", clientsController.post)

export { clientsRouter };

import { Router } from "express";

import { clientsController } from "../controllers/index.js";

const clientsRouter = Router();

clientsRouter.post("/", clientsController.post)

export { clientsRouter };

import { Router } from "express";
import { additionalsController } from "../controllers/index.js";

const additionalsRouter = Router();

additionalsRouter.post("/", additionalsController.create);

export { additionalsRouter };

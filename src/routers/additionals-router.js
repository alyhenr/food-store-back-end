import { Router } from "express";
import { additionalsController } from "../controllers/index.js";
import { validateBody } from "../middlewares/validation-middleware.js";
import { additionalsSchema } from "../schemas/additionals-schemas.js";

const additionalsRouter = Router();

additionalsRouter.post("/", validateBody(additionalsSchema), additionalsController.create);

export { additionalsRouter };

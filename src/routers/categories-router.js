import { Router } from "express";

import { categoriesController } from "../controllers/index.js";
import { validateBody } from "../middlewares/validation-middleware.js";
import { categoriesSchema } from "../schemas/categories-schemas.js";

const categoriesRouter = Router();

categoriesRouter.post("/", validateBody(categoriesSchema), categoriesController.post);

export { categoriesRouter };

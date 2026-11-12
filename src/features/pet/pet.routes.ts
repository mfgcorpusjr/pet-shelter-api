import { Router } from "express";

import * as petControllers from "./pet.controllers.js";
import { authenticate } from "../../middlewares/authentication.middleware.js";

const router = Router();

router.get("/", petControllers.getAll);
router.get("/:id", authenticate, petControllers.get);

export default router;

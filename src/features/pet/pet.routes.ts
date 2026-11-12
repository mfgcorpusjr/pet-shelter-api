import { Router } from "express";

import * as petControllers from "./pet.controllers.js";

const router = Router();

router.get("/", petControllers.getAll);
router.get("/:id", petControllers.get);

export default router;

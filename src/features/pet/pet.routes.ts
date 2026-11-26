import { Router } from "express";

import { getPets, getPet } from "./pet.controllers.js";
import { authenticate } from "../../middlewares/authentication.middleware.js";

const petRoutes = Router();

petRoutes.get("/", getPets);
petRoutes.get("/:id", authenticate, getPet);

export default petRoutes;

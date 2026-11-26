import { Router } from "express";

import { getPets, getPet } from "./pet.controllers.js";

const petRoutes = Router();

petRoutes.get("/", getPets);
petRoutes.get("/:id", getPet);

export default petRoutes;

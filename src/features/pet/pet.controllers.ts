import type { Request, Response } from "express";

import { pets } from "./pet.data.js";
import { getAllQuerySchema } from "./pet.schemas.js";
import { NotFoundError } from "../../utils/error.js";

export const getAll = (req: Request, res: Response) => {
  const { minAge, maxAge, species, isAdopted } = getAllQuerySchema.parse(
    req.query,
  );

  let filteredPets = pets;

  if (minAge) {
    filteredPets = filteredPets.filter((pet) => pet.age >= minAge);
  }

  if (maxAge) {
    filteredPets = filteredPets.filter((pet) => pet.age <= maxAge);
  }

  if (species) {
    filteredPets = filteredPets.filter((pet) => pet.species === species);
  }

  if (isAdopted) {
    filteredPets = filteredPets.filter(
      (pet) => pet.isAdopted === JSON.parse(isAdopted),
    );
  }

  res.json({ success: true, data: filteredPets });
};

export const get = (req: Request, res: Response) => {
  const { id } = req.params;

  const pet = pets.find((pet) => pet.id.toString() === id);

  if (pet) {
    res.json({ success: true, data: pet });
  } else {
    throw new NotFoundError("No pet found.");
  }
};

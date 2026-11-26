import type { Request, Response } from "express";

import { pets } from "./pet.data.js";
import { getPetsQuerySchema } from "./pet.schemas.js";

export const getPets = (req: Request, res: Response) => {
  const { minAge, maxAge, species, isAdopted } = getPetsQuerySchema.parse(
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

  res.json({
    success: true,
    data: filteredPets,
  });
};

export const getPet = (req: Request, res: Response) => {};

import { z } from "zod";

export const getPetsQuerySchema = z.object({
  minAge: z.coerce.number({ error: "Min age must be a number." }).optional(),
  maxAge: z.coerce.number({ error: "Max age must be a number." }).optional(),
  species: z
    .enum(["cat", "dog"], { error: "Species must be either 'cat' or 'dog'." })
    .optional(),
  isAdopted: z
    .enum(["true", "false"], {
      error: "Is adopted must be either 'true' or 'false'.",
    })
    .optional(),
});

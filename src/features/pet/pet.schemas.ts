import { z } from "zod";

export const getAllSchema = z.object({
  minAge: z.coerce.number({ error: "'minAge' must be a number." }).optional(),
  maxAge: z.coerce.number({ error: "'maxAge' must be a number." }).optional(),
  species: z
    .enum(["cat", "dog"], {
      error: "'species' must be either 'cat' or 'dog'.",
    })
    .optional(),
  isAdopted: z
    .enum(["true", "false"], {
      error: "'isAdopted' must be either 'true' or 'false'.",
    })
    .optional(),
});

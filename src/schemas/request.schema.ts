import { z } from "zod";

export const numericIdSchema = z.object({
  id: z.coerce.number({ error: "ID must be a number." }),
});

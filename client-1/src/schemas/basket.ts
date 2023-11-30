import { z } from "zod";

export const basketSchema = z.array(
  z.object({
    id: z.string(),
    quantity: z.number().int().positive(),
  })
);

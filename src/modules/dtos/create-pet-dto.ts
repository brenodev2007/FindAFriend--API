import { z } from "zod";

export const createPetSchema = z.object({
  name: z.string().min(3),
  city: z.string().nullable(),
  description: z.string().min(6).nullish(),
  age: z.number().nullish(),
  size: z.string().min(10).nullish(),
  energyLevel: z.string().nullish(),
  independency: z.string().nullish(),
});

export type CreateOrgDTO = z.infer<typeof createPetSchema>;

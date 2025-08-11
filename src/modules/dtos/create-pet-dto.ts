import { z } from "zod";

export const createPetDTO = z.object({
  name: z.string().min(3),
  city: z.string().nullable(),
  description: z.string().min(6).nullish(),
  age: z.number().nullish(),
  size: z.string().min(10).nullish(),
  energyLevel: z.string().nullish(),
  independency: z.string().nullish(),
});

export type createPetDTO = z.infer<typeof createPetDTO>;

import { z } from "zod";

export const createOrgSchema = z.object({
  name: z.string().min(3),
  email: z.string().email(),
  password: z.string().min(6),
  address: z.string().min(5),
  whatsapp: z.string().min(10),
});

export type CreateOrgDTO = z.infer<typeof createOrgSchema>;

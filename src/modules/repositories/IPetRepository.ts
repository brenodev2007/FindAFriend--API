import { Pet } from "../../generated/prisma";

export interface IPetRepository {
  create(data: Omit<Pet, "id">): Promise<Pet>;
}

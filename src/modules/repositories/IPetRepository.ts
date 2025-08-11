import { Pet } from "../../generated/prisma";

export interface IPetRepository {
  create(data: Omit<Pet, "id">): Promise<Pet>;
  FindByCidade(data: { cidade: string }): Promise<Pet[]>;
  FindByPetById(data: { id: string }): Promise<Pet>;
}

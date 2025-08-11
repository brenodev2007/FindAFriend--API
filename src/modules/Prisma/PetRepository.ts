import { Pet } from "../../generated/prisma";
import { IPetRepository } from "../repositories/IPetRepository";
import { prisma } from "../../prisma/prisma";

export class PrismaPetRepository implements IPetRepository {
  async create(data: Omit<Pet, "id">) {
    const pet = await prisma.pet.create({
      data,
    });

    return pet;
  }
  async FindByCidade(data: { cidade: string }) {
    const pet = await prisma.pet.findMany({
      where: {
        cidade: data.cidade,
      },
    });

    return pet;
  }
  async FindByPetById(data: { id: string }) {
    const pet = prisma.pet.findUnique({
      where: {
        id: data.id,
      },
    });

    return pet;
  }
}

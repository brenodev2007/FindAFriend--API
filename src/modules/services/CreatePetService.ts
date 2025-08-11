import { PrismaPetRepository } from "../Prisma/PetRepository";
import type { createPetDTO } from "../dtos/create-pet-dto";

export class CreatePetService {
  constructor(private petRepository: PrismaPetRepository) {}

  async execute(data: createPetDTO & { orgId: string }) {
    if (
      !data.name ||
      !data.age ||
      !data.city ||
      !data.description ||
      !data.energyLevel ||
      !data.independency ||
      !data.size ||
      !data.orgId
    ) {
      throw new Error("Campos obrigatórios não informados");
    }

    const pet = await this.petRepository.create({
      ...data,
      city: data.city ?? "",
      description: data.description ?? "",
      size: data.size ?? "",
      energyLevel: data.energyLevel ?? "",
      independency: data.independency ?? "",
      age: data.age,
    });

    return pet;
  }
}

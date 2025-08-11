import { IPetRepository } from "../repositories/IPetRepository";

export class FindPetByCidadeService {
  constructor(private petRepository: IPetRepository) {}

  async execute(id: string) {
    const org = await this.petRepository.FindByPetById({ id });
    return org;
  }
}

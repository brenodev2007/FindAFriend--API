import { IPetRepository } from "../repositories/IPetRepository";

export class FindByCidadeService {
  constructor(private petRepository: IPetRepository) {}

  async execute(cidade: string) {
    const org = await this.petRepository.FindByCidade({ cidade });
    return org;
  }
}

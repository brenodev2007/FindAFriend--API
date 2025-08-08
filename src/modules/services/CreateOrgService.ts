import bcrypt from "bcrypt";
import { IOrgRepository } from "../repositories/IOrgRepository";
import { CreateOrgDTO } from "../dtos/create-org-dto";

export class FindByWhatsAppService {
  constructor(private orgRepository: IOrgRepository) {}

  async execute(whatsapp: string) {
    const org = await this.orgRepository.findByWhatsApp(whatsapp);
    return org;
  }
}

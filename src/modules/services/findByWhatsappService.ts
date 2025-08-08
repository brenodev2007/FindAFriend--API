import bcrypt from "bcrypt";
import { IOrgRepository } from "../repositories/IOrgRepository";
import { CreateOrgDTO } from "../dtos/create-org-dto";

export class CreateOrgService {
  constructor(private orgRepository: IOrgRepository) {}

  async execute(data: CreateOrgDTO) {
    const exists = await this.orgRepository.findByEmail(data.email);
    if (exists) throw new Error("Email já cadastrado");

    const hashed = await bcrypt.hash(data.password, 10);
    return this.orgRepository.create({ ...data, password: hashed });
  }
}

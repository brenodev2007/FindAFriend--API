import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { IOrgRepository } from "../repositories/IOrgRepository";
import { LoginOrgDTO } from "../dtos/login-org-dto";

export class LoginOrgService {
  constructor(private orgRepository: IOrgRepository) {}

  async execute({ email, password }: LoginOrgDTO) {
    const org = await this.orgRepository.findByEmail(email);
    if (!org) throw new Error("Credenciais inválidas");

    const passwordMatch = await bcrypt.compare(password, org.password);
    if (!passwordMatch) throw new Error("Credenciais inválidas");

    const token = jwt.sign(
      { orgId: org.id },
      process.env.JWT_SECRET || "default_secret",
      { expiresIn: "1d" }
    );

    return { token };
  }
}

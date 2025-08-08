import { Request, Response } from "express";
import { loginOrgSchema } from "../../dtos/login-org-dto";
import { PrismaOrgRepository } from "../../Prisma/OrgRepository";
import { LoginOrgService } from "../../services/loginOrg";

export class LoginOrgController {
  async handle(req: Request, res: Response) {
    const data = loginOrgSchema.parse(req.body);

    const repo = new PrismaOrgRepository();
    const service = new LoginOrgService(repo);

    const result = await service.execute(data);

    return res.status(200).json(result);
  }
}

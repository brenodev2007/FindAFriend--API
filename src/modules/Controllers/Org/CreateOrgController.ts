// src/modules/orgs/controllers/CreateOrgController.ts
import { Request, Response } from "express";
import { createOrgSchema } from "../../dtos/create-org-dto";
import { PrismaOrgRepository } from "../../Prisma/OrgRepository";
import { CreateOrgService } from "../../services/CreateOrgService";

export class CreateOrgController {
  async handle(req: Request, res: Response) {
    const body = createOrgSchema.parse(req.body);

    const repo = new PrismaOrgRepository();
    const service = new CreateOrgService(repo);

    const org = await service.execute(body);

    return res.status(201).json(org);
  }
}

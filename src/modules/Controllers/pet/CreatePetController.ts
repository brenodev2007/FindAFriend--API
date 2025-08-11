// src/modules/orgs/controllers/CreateOrgController.ts
import { Request, Response } from "express";
import { createPetDTO } from "../../dtos/create-pet-dto";
import { CreateOrgService } from "../../services/CreateOrgService";
import { PrismaPetRepository } from "../../Prisma/PetRepository";
import { CreatePetService } from "../../services/CreatePetService";

export class CreatePetController {
  async handle(req: Request, res: Response) {
    const body = createPetDTO.parse(req.body);

    const orgId = req.body.orgId;

    const repo = new PrismaPetRepository();
    const service = new CreatePetService(repo);

    const pet = await service.execute({
      ...body,
      orgId,
    });

    return res.status(201).json(pet);
  }
}

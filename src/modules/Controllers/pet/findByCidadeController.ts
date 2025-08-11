import { Request, Response } from "express";
import { PrismaPetRepository } from "../../Prisma/PetRepository";
import { FindByCidadeService } from "../../services/findByCidadeService";

export class FindByCidadeController {
  async handle(req: Request, res: Response) {
    try {
      const { cidade } = req.body;

      if (!cidade) {
        return res
          .status(400)
          .json({ error: "Número de WhatsApp não informado" });
      }

      const repo = new PrismaPetRepository();
      const service = new FindByCidadeService(repo);

      const result = await service.execute(cidade);

      if (!result) {
        return res.status(404).json({ error: "Organização não encontrada" });
      }

      return res.status(200).json(result);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Erro interno no servidor" });
    }
  }
}

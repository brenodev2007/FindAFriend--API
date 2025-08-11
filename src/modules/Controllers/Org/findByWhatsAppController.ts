import { Request, Response } from "express";
import { PrismaOrgRepository } from "../../Prisma/OrgRepository";
import { FindByWhatsAppService } from "../../services/findByWhatsappService";

export class FindByWhatsAppController {
  async handle(req: Request, res: Response) {
    try {
      const { whatsapp } = req.body;

      if (!whatsapp) {
        return res
          .status(400)
          .json({ error: "Número de WhatsApp não informado" });
      }

      const repo = new PrismaOrgRepository();
      const service = new FindByWhatsAppService(repo);

      const result = await service.execute(whatsapp);

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

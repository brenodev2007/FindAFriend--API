import { PrismaClient, Org } from "../../generated/prisma";
import { IOrgRepository } from "../repositories/IOrgRepository";

const prisma = new PrismaClient();

export class PrismaOrgRepository implements IOrgRepository {
  async create(data: Omit<Org, "id">): Promise<Org> {
    return prisma.org.create({ data });
  }

  async findByEmail(email: string): Promise<Org | null> {
    return prisma.org.findUnique({ where: { email } });
  }
}

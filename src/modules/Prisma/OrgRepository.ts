import { PrismaClient, Org } from "../../generated/prisma";
import { IOrgRepository } from "../repositories/IOrgRepository";

const prisma = new PrismaClient();

export class PrismaOrgRepository implements IOrgRepository {
  async create(data: Omit<Org, "id">): Promise<Org> {
    return prisma.org.create({ data });
  }

  async login(email: string, password: string): Promise<Org | null> {
    return prisma.org.findUnique({ where: { email } }).then((org) => {
      if (!org) return null;
      return org;
    });
  }

  async findByEmail(email: string): Promise<Org | null> {
    return prisma.org.findUnique({ where: { email } });
  }
}

import { Org } from "../../generated/prisma";

export interface IOrgRepository {
  create(data: Omit<Org, "id">): Promise<Org>;
  findByEmail(email: string): Promise<Org | null>;
}

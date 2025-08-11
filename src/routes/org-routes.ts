import { Router } from "express";
import { LoginOrgController } from "../modules/Controllers/Org/LoginOrgController";
import { CreateOrgController } from "../modules/Controllers/Org/CreateOrgController";
import { FindByWhatsAppController } from "../modules/Controllers/Org/findByWhatsAppController";

const orgRoutes = Router();
const createOrg = new CreateOrgController();
const loginOrg = new LoginOrgController();
const findWhatsOrg = new FindByWhatsAppController();

orgRoutes.post("/", (req, res) => createOrg.handle(req, res));
orgRoutes.post("/login", (req, res) => loginOrg.handle(req, res));
orgRoutes.get("/whats", (req, res) => findWhatsOrg.handle(req, res));

export { orgRoutes };

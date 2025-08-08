import { Router } from "express";
import { LoginOrgController } from "../modules/Controllers/Org/LoginOrgController";
import { CreateOrgController } from "../modules/Controllers/Org/CreateOrgController";

const orgRoutes = Router();
const createOrg = new CreateOrgController();
const loginOrg = new LoginOrgController();

orgRoutes.post("/", (req, res) => createOrg.handle(req, res));
orgRoutes.post("/login", (req, res) => loginOrg.handle(req, res));

export { orgRoutes };

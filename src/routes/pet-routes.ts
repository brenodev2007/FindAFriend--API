import { Router } from "express";
import { LoginOrgController } from "../modules/Controllers/Org/LoginOrgController";
import { CreateOrgController } from "../modules/Controllers/Org/CreateOrgController";
import { FindByWhatsAppController } from "../modules/Controllers/Org/findByWhatsAppController";
import { CreatePetController } from "../modules/Controllers/pet/CreatePetController";
import { FindByPetIdController } from "../modules/Controllers/pet/findPetByIdController";
import { FindByCidadeController } from "../modules/Controllers/pet/findByCidadeController";

const PetRoutes = Router();
const createPet = new CreatePetController();
const findId = new FindByPetIdController();
const findByCidade = new FindByCidadeController();

PetRoutes.post("/", (req, res) => createPet.handle(req, res));
PetRoutes.get("/cidade", (req, res) => findByCidade.handle(req, res));
PetRoutes.get("/:id", (req, res) => findId.handle(req, res));

export { PetRoutes };

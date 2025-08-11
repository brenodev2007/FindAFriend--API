import { Router } from "express";
import { orgRoutes } from "./org-routes";
import { PetRoutes } from "./pet-routes";

const routes = Router();

// Rotas de Organizações
routes.use("/org", orgRoutes);

// Rotas de Pets
routes.use("/pet", PetRoutes);

export { routes };

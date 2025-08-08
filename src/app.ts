import express from "express";
import { routes } from "./routes";
import { errorHandler } from "./middlewares/error-handler";

const app = express();

// Permitir JSON no corpo das requisições
app.use(express.json());

// Rotas
app.use(routes);

app.use(errorHandler);

export { app };

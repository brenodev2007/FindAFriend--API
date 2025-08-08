import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res.status(401).json({ error: "Token não fornecido" });

  const [, token] = authHeader.split(" ");

  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || "default_secret"
    );
    return next();
  } catch {
    return res.status(401).json({ error: "Token inválido" });
  }
}

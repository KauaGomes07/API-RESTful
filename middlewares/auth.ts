
import type { RequestHandler } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";

const JWT_SECRET: jwt.Secret = process.env.JWT_SECRET as string;

// Define o conteúdo do token
interface AuthContent extends JwtPayload {
  id: string;
}

// Middleware de autenticação
const auth: RequestHandler = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Acesso negado!" });
  }

  try {
    const decoded = jwt.verify(token.replace("Bearer ", ""), JWT_SECRET) as AuthContent;

    req.clientId = decoded.id;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token inválido!" });
  }
};

export default auth;

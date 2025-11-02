import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

const JWT_SECRET: jwt.Secret = process.env.JWT_SECRET as string

//Cadastro

router.post("/cadastro", async (req, res) => {
  try {
    const { email, name, password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    const client = await prisma.client.create({
      data: {
        email: email,
        name: name,
        password: hashPassword,
      },
    });
    const { password: _, ...clientWithoutPassword } = client

    res.status(201).json(clientWithoutPassword)
    
  } catch (err) {
    res.status(500).json({ message: "Erro no servidor, tente novamente." });
  }
});

//Login

router.post("/login", async (req, res) => {
  
  try {

    const { email, password } = req.body
    //Busca o usuário no db
    const client = await prisma.client.findUnique({
      where: {
        email: email
      }
    })
    // Verifica se o usuário existe
    if(!client){
      return res.status(404).json({message: "Usuário não encontrado."})
    }

    const isMatch = await bcrypt.compare(password, client.password)
    //Compara a senha do db com a que o usuário digitou
    if(!isMatch){
      return res.status(400).json({ message: "Senha inválida!"})
    }
    //Gerar token JWT
    const token = jwt.sign({ id: client.id}, JWT_SECRET, { expiresIn: "1m"})

    res.status(200).json(token)

  } catch (err){
    res.status(500).json({ message: "Erro no servidor, tente novamente." });
  }


})

export default router;

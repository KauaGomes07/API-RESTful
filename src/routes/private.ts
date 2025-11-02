import express from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const router = express.Router();

//Rota de listagem de usuários, acesso somente através do Token

router.get("/listar-usuarios", async (req, res) => {
    try{
        const clients = await prisma.client.findMany({ omit: { password: true }})
        
        res.status(200).json({ message: "Usuários listados com sucesso!", clients })
    }
    catch(err){
        res.status(500).json({ message: "Falha no servidor."})
    }


})

export default router
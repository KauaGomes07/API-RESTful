import express from "express"
import publicRoutes from "./routes/public.ts"
import privateRoutes from "./routes/private.ts"

import auth from "../middlewares/auth.ts"

const app = express()
app.use(express.json())

app.use("/", publicRoutes)
app.use("/", auth, privateRoutes)


app.listen(3000, () => console.log("Servidor rodando"))
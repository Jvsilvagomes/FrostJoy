import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import frostyRoutes from "./routes/frostyRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();
const serverPort = process.env.PORT || 3001;

app.get("/", (req, res) => {
    res.send("Servidor FrostyJoy está funcionando!");
});

// Rotas da aplicação

app.use("/frostyjoy", frostyRoutes);

app.listen(serverPort, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${serverPort} 🚀`);
});
import { Router } from "express";
import { criarSorveteria, getAllSorveterias, getSorveteriaById, atualizarSorveteria, deletarSorveteria } from "../controllers/frostyController.js";

const router = Router();

router.post("/", criarSorveteria);
router.get("/", getAllSorveterias);
router.get("/:id", getSorveteriaById);
router.put("/:id", atualizarSorveteria);
router.delete("/:id", deletarSorveteria);

export default router;
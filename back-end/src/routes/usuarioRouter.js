import { Router } from "express";
import { CriarUser,ListarUser } from "../controller/usuarioController.js";

const router = Router();

router.post('/usuarios', CriarUser);
router.get('/usuarios', ListarUser);

export default router
import { Router } from "express";
import { CriarPsico, ListarPsico } from "../controller/psicologoController.js";

const router = Router();

router.post('/psicologos', CriarPsico);
router.get('/psicologos', ListarPsico);

export default router
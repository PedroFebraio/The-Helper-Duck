import { Router } from "express";
import { AtualizarRecom, CriarRecom, BuscarRecom, DeletarRecom, ListarRecom } from "../controller/recompensaController.js";

const router = Router();

router.post('/recompensas', CriarRecom);
router.get('/recompensas', ListarRecom);
router.put('/recompensas/:id', AtualizarRecom);
router.get('/recompensas/:id', BuscarRecom);
router.delete('/recompensas/:id', DeletarRecom);

export default router
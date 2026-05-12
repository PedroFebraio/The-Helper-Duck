import { Router } from "express";
import { CriarPsico, ListarPsico, BuscarPsico, DeletarPsico, AtualizarPsico} from "../controller/psicologoController.js";

const router = Router();

router.post('/psicologos', CriarPsico);
router.get('/psicologos', ListarPsico);
router.put('/psicologos/:id', AtualizarPsico);
router.get('/psicologos/:id', BuscarPsico);
router.delete('/psicologos/:id', DeletarPsico);


export default router
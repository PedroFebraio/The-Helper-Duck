import { Router } from "express";
import { AtualizarUser, BuscarUser, CriarUser, DeletarUser, ListarUser } from "../controller/usuarioController.js";

const router = Router();

router.post('/usuarios', CriarUser);
router.get('/usuarios', ListarUser);
router.put('/usuarios/:id', AtualizarUser);
router.get('/usuarios/:id', BuscarUser);
router.delete('/usuarios/:id', DeletarUser);


export default router
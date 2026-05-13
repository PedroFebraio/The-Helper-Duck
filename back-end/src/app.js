import express from "express";
import usuarioRouter from "./routes/usuarioRouter.js";
import psicologoRouter from "./routes/psicologoRouter.js";
import recompensaRouter from "./routes/recompensaRouter.js";

const app = express();
app.use(express.json());

app.use( usuarioRouter )
app.use ( psicologoRouter );
app.use ( recompensaRouter );

export default app
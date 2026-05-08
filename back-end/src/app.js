import express from "express";
import usuarioRouter from "./routes/usuarioRouter.js";
import psicologoRouter from "./routes/psicologoRouter.js";

const app = express();
app.use(express.json());

app.use( usuarioRouter )
app.use ( psicologoRouter );
export default app
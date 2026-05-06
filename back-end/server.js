import app from "./src/app.js"
import { connectDB } from "./src/config/db.js"

connectDB();

const PORT = 3000

app.listen(PORT, ()=>{
    console.log(`Servidor rodando em http://localhost:${PORT}`);
})

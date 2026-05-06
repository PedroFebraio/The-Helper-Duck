import mongoose from "mongoose";
import { Psicologos } from "./psicologoModel";
import { Usuarios } from "./usuarioModel";

const recompensaSchema = new mongoose.Schema({
    nome: { 
        type: String,  
        required: true,
    },
    descricao: { 
        type: String
    },
    custo_pontos: { 
           type: Number,
           required: true 
    },
    tipo:{
        type: String
        
    }
}, 
{ 
    timestamps: true, 
    versionKey: false 
});

export const Recompensas = mongoose.model('Recompensas', recompensaSchema);

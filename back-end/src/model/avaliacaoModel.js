import mongoose from "mongoose";
import { Psicologos } from "./psicologoModel";
import { Consultas } from "./consultaModel";
import { Usuarios } from "./usuarioModel";

const avaiacaoSchema = new mongoose.Schema({
    id_consulta: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: Consultas, 
        required: true,
        unique: true 
    },
    id_psicologo: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: Psicologos, 
        required: true 
    },
    id_usuario: { 
           type: mongoose.Schema.Types.ObjectId, 
           ref: Usuarios,
           required: true 
    },
    nota:{
        type: Number,
        min:1,
        max:5, 
        required: true
        
    },
    comomentario: {
        type: String
    }
}, 
{ 
    timestamps: true, 
    versionKey: false 
});

const Avaliacoes = mongoose.model('Avaliacoes', avaiacaoSchema);

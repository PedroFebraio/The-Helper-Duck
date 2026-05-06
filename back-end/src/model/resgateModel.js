import mongoose from "mongoose";
import { Psicologos } from "./psicologoModel";
import { Usuarios } from "./usuarioModel";
import { Recompensas } from "./recompensaModel";

const resgateSchema = new mongoose.Schema({
    Id_usuario: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: Usuarios,   
        required: true,
    },
    Id_recompensa: { 
         type: mongoose.Schema.Types.ObjectId,
        ref:  Recompensas,  
        required: true,
    },
    codigo_cupom: { 
           type: String,
           unique: true
        },
           
    utilizado:{
        type: Boolean,
        default: false
        
    }
}, 
{ 
    timestamps: true, 
    versionKey: false 
});

const Resgates = mongoose.model('Resgates', resgatesSchema);

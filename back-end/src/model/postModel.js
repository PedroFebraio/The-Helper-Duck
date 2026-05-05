import mongoose from "mongoose";
import { Psicologos } from "./psicologoModel";

const postSchema = new mongoose.Schema({
    id_psicologo: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: Psicologos, 
        required: true 
    },
    titulo: { 
        type: String, 
        required: true 
    },
    conteudo: { 
        type: String, 
        required: true 
    },
    categoria: { 
        type: String 
    }, // Ex: "Saúde Mental", "Dicas"
    curtidas: { 
        type: Number, 
        default: 0 
    }
}, 
{ 
    timestamps: true, 
    versionKey: false 
});

export const Post = mongoose.model('Post', postSchema);

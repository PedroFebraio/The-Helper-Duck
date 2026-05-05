import mongoose from "mongoose";
import { Usuarios } from "./usuarioModel";

const humorSchema = new mongoose.Schema({
    id_usuario: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: Usuarios, 
        required: true 
    },
    sentimento: { 
        type: String, 
        enum: ['mal', 'neutro', 'bem'], 
        required: true 
    },
    data: { 
        type: Date, 
        default: Date.now 
    }
}, 
{ 
    versionKey: false 
});

const Humores = mongoose.model('Humores', humorSchema);

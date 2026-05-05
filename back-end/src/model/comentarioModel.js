import mongoose from "mongoose";
import { Post } from "./postModel";
import { Psicologos } from "./psicologoModel";

const comentarioSchema = new mongoose.Schema({
    id_post: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: Post, 
        required: true 
    },
    id_autor: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: Psicologos, 
        required: true 
    },
    conteudo: { 
        type: String, 
        required: true 
    }
}, 
{ 
    timestamps: true, 
    versionKey: false 
});

const Comentario = mongoose.model('Comentarios', comentarioSchema);

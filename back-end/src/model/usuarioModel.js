import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
     email:{
        type: String,
        required: true,
    },
     senha:{
        type: String,
        required: true,
    },
     dataNascimento:{
        type: String,
        required: true,
    },
     pontosFidelidade:{
        type: String,
        default: 0,
        required: true,
    },
     role:{
        type: String,
        Default: 'patient',
        required: true,
    },
     Status:{
        type: String,
        Enum: ['ativo', 'suspenso'],
        Default: 'ativo',
        required: true,
    }   
},
    {
        timestamps: true,
        versionKey: false
    }
);

export const Usuarios = mongoose.model('Usuarios', usuarioSchema);
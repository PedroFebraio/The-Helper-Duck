import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nome:{
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
        default: 'patient',
        required: true,
    },
     Status:{
        type: String,
        Enum: ['ativo', 'suspenso'],
        default: 'ativo',
        required: true,
    }   
},
    {
        timestamps: true,
        versionKey: false
    }
);

export const Usuarios = mongoose.model('Usuarios', usuarioSchema);

export function criarUsuario(nome, email, senha, dataNascimento){


    const user = Usuarios.create({
        nome: nome,
        email: email,
        senha: senha,
        dataNascimento: dataNascimento
    })

    return user
}

export function listarUsuario(){

    const user = Usuarios.find();
    return user
}
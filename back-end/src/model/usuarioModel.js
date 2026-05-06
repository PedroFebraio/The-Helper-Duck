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
     data_nascimento:{
        type: Date,
        required: true,
    },
     pontos_fidelidade:{
        type: String,
        default: 0,
        required: true,
    },
     role:{
        type: String,
        default: 'patient',
        required: true,
    },
     status:{
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

export function criarUsuario(nome, email, senha, data_nascimento){


    const user = Usuarios.create({
        nome,
        email,
        senha,
        data_nascimento,
        pontos_fidelidade: 0,
        role: 'patient',
        status: 'ativo'

    })

    return user
}

export function listarUsuario(){

    const user = Usuarios.find();
    return user
}
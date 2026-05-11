import mongoose from "mongoose";

const usuarioSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
     email:{
        type: String,
        required: true,
        unique: true
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
        type: Number,
        default: 0,
        required: true,
    },
     role:{
        type: String,
        default: 'usuario',
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
        data_nascimento

    })

    return user
}

export function listarUsuario(){

    const user = Usuarios.find();
    return user
}

export function buscarUsuario(id){

    const user = Usuarios.findById(id);
    return user;
}

export function deletarUsuario(id){
    const user = Usuarios.findByIdAndDelete(id);
    return user;

}

export function atualizarUsuario(id, dados){

    const user = Usuarios.findByIdAndUpdate(
        id, 
        dados,
        {
            new: true,
            runValidators: true
        }
    )

    return user
}
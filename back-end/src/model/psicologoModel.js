import mongoose from "mongoose";

const psicologoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
     email:{
        type: String,
        required: true,
        unique: true
    },
     crp:{
        type: String,
        required: true,
    },
     especialidade:{
        type: [String],
        required: true,
        default: []
    },
     preco_sessao:{
        type: Number,
        required: true,
    },
     bio:{
        type: String
    },
     Status:{
        type: String,
        Enum: ['pendente', 'suspenso'],
        Default: 'pendente',
        required: true,
    },
    role:{
        type: String,
        default: 'psicologo'
    }   
},
    {
        timestamps: true,
        versionKey: false
    }
);

export const Psicologos = mongoose.model('Psicologos', psicologoSchema);

export function criarPsicologo(nome, email, crp, especialidade){

    const psico = Psicologos.create({
        nome,
        email,
        crp,
        especialidade
    })

    return psico
}

export function listarPsicologo(){

    const psico = Psicologos.find();
    return psico
}
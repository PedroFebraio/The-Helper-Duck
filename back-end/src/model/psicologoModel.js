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
    senha:{
        type: String,
        required: true,
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
        required: true
    },
     bio:{
        type: String
    },
     Status:{
        type: String,
        Enum: ['pendente', 'suspenso'],
        default: 'pendente',
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

export function criarPsicologo(nome, email, senha, crp, especialidade, preco_sessao, bio){

    const psico = Psicologos.create({
        nome,
        email,
        senha,
        crp,
        especialidade,
        preco_sessao,
        bio
    })

    return psico
}

export function listarPsicologo(){

    const psico = Psicologos.find();
    return psico
}

export function buscarPsicologo(id){

    const psico = Psicologos.findById(id);
    return psico;
}

export function deletarPsicologo(id){
    const psico = Psicologos.findByIdAndDelete(id);
    return psico;

}

export function atualizarPsicologo(id, dados){

    const psico = Psicologos.findByIdAndUpdate(
        id, 
        dados,
        {
            new: true,
            runValidators: true
        }
    )

    return psico
}
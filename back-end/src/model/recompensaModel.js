import mongoose from "mongoose";

const recompensaSchema = new mongoose.Schema({
    nome: { 
        type: String,  
        required: true,
    },
    descricao: { 
        type: String
    },
    custo_pontos: { 
           type: Number,
           required: true 
    },
    tipo:{
        type: String
        
    }
}, 
{ 
    timestamps: true, 
    versionKey: false 
});

export const Recompensas = mongoose.model('Recompensas', recompensaSchema);

export function criarRecompensa(nome, descricao, custo_pontos, tipo){

    const recom = Recompensas.create({
        nome,
        descricao,
        custo_pontos,
        tipo
    })

    return recom
}

export function listarRecompensa(){

    const recom = Recompensas.find();
    return recom; 
}

export function buscarRecompensa(id){

    const recom = Recompensas.findById(id);
    return recom;
}

export function deletarRecompensa(id){

    const recom = Recompensas.findByIdAndDelete();
    return recom;
}

export function atualizarRecompensas(id, dados){

    const recom = Recompensas.findByAndUpdate(
        id,
        dados,
        {
            new: true,
            runValidators: true
        }
    )

    return recom
}
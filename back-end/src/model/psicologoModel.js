import mongoose from "mongoose";

const psicologoSchema = new mongoose.Schema({
    nome:{
        type: String,
        required: true,
    },
     email:{
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
        default: 0,
        required: true,
    },
     bio:{
        type: String,
        Default: 'patient',
        required: true,
    },
     Status:{
        type: String,
        Enum: ['pendente', 'suspenso'],
        Default: 'pendente',
        required: true,
    }   
},
    {
        timestamps: true,
        versionKey: false
    }
);

export const Psicologos = mongoose.model('Psicologos', psicologoSchema);
import mongoose from "mongoose";
import { Usuarios } from "./usuarioModel";
import { Psicologos } from "./psicologoModel";

const consultaSchema = new mongoose.Schema({
    id_usuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Usuarios,
        required: true
    },
    id_psicologo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: Psicologos,
        required: true
    },
    data_consulta: {
        type: Date,
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['agendada', 'concluida', 'cancelada'],
        default: 'agendada'
    },
    tipo_pagamento: {
        type: String, 
        enum: ['dinheiro', pontos],
        default:'dinheiro'
    },
    observacoes: {
        type: String,
    },
},
{
    timestamps: true,
    versionKey: false
});

const Consultas = mongoose.model('Consultas', consultaSchema);
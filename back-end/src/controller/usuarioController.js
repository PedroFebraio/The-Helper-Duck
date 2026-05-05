import { criarUsuario, listarUsuario } from "../model/usuarioModel.js";

export async function CriarUser(req, res) {
    
    const {nome, email, senha, dataNascimento} = req.body;

    try {
        const user = await criarUsuario (nome, email, senha, dataNascimento)
    
        if(!user) res.status(400).json({message: "Informação não introduzida ou incorreta para criar"})
    
        res.status(200).json(user);
        }
     catch (error) {
        res.status(500).json({message: "Erro ao criar usuário"})
        console.log(error)
    }
}

export async function ListarUser(req, res){

    try {
        const user = await listarUsuario()

        if(!user) res.status(400).json({message: "Usuário não encontrado"})

        res.status(200).json(user);

    } catch (error) {
        res.status(500).json({message: "Erro ao listar usuário"})
        console.log(error)
        
    }
}
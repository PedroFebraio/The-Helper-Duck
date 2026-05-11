import { atualizarUsuario, buscarUsuario, criarUsuario, deletarUsuario, listarUsuario } from "../model/usuarioModel.js";

export async function CriarUser(req, res) {
    
    const {nome, email, senha, data_nascimento} = req.body;

    try {
        const user = await criarUsuario (nome, email, senha, data_nascimento)
    
        if(!user) res.status(400).json({message: "Informação não introduzida ou incorreta para criar"})
    
        res.status(200).json({message: "Usuário criado!", user});
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


export async function BuscarUser(req, res){

    const id = req.params.id;

    try {
        const user = await buscarUsuario(id)

        if(!user) res.status(400).json({message: "Usuário não encontrado"})

        res.status(200).json({message: "Busca realizada.",user});

    } catch (error) {
        res.status(500).json({message: "Erro ao Buscar usuário"})
        console.log(error)
        
    }

}


export async function DeletarUser(req, res){

    const id = req.params.id

    try {
        const user = await deletarUsuario(id)

        if(!user) res.status(400).json({message: "Usuário não encontrado"})

        res.status(200).json({message: "Usuário deletado com sucesso!"});

    } catch (error) {
        res.status(500).json({message: "Erro ao deletar usuário"})
        console.log(error)
        
    }

    
}


export async function AtualizarUser(req, res){

    const id = req.params.id
    const {nome, email, senha} = req.body

    try {
        const user = await atualizarUsuario(id, {nome, email, senha})

        if(!user) res.status(404).json({message: "Usuário não encontrado"})

        res.status(200).json({message: "Atualização feita com sucesso!", user});

    } catch (error) {
        res.status(500).json({message: "Erro ao atualizar usuário"})
        console.log(error)
        
    }
    
}


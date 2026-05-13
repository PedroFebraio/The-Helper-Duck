import { criarRecompensa, listarRecompensa, buscarRecompensa, deletarRecompensa, atualizarRecompensas } from "../model/recompensaModel.js";

export async function CriarRecom(req, res) {

    const {nome, descricao, custo_pontos, tipo} = req.body;

    try {
        const recom = await criarRecompensa(nome, descricao, custo_pontos, tipo)
        
        if(!recom) res.status(400).json({message: "Informaçaõ não introduzida ou incorreta"});

        res.status(200).json({message: "Recompensa criada!", recom});

    } catch (error) {
        res.status(500).json({message: "Erro ao criar recompensa"});
        console.log(error)
    }
}

export async function ListarRecom(req, res){

    try {
        const recom = await listarRecompensa()

        if(!recom) res.status(400).json({message: "Recompensa não encontrado"});

        res.status(200).json(recom);
        
    } catch (error) {
        res.status(500).json({message: "Erro ao listar recompensa"})
        console.log(error)
    }
}

export async function BuscarRecom(req,res){

    const id = req.params.id;

    try {
        const recom = await buscarRecompensa(id)

        if(!recom) res.status(400).json({message: "Recompensa não encontrado"})
     
        res.status(200).json({message: "Busca realizada.", recom})

    } catch (error) {
        res.status(500).json({message: "Erro ao buscar recompensa"})
        console.log(error)
    }
}

export async function DeletarRecom(req, res){

    const id = req.params.id

    try {
        const recom = await deletarRecompensa(id)

        if(!recom) res.status(400).json({message: "Recompensa não encontrado"})

        res.status(200).json({message: "Recompensa deletada com sucesso!"})
        
    } catch (error) {
        res.status(500).json({message: "Erro ao deletar recompensa"})
        console.log(error)
    }
}

export async function AtualizarRecom(req, res){

    const id = req.params.id
    const {nome, descricao, custo_pontos, tipo} = req.body

    try {
        const recom = await atualizarRecompensas(id, {nome, descricao, custo_pontos, tipo})

        if(!recom) res.status(404).json({message: "Recompensa não encontrada."})
        
        res.status(200).json({message: "Recompensa atualizada com sucesso!"})
    
    } catch (error) {
        res.status(500).json({message:"Erro ao atulizar recompensa"})
        console.log(error)        
    }
}
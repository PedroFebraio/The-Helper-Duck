import { atualizarPsicologo, buscarPsicologo, criarPsicologo, deletarPsicologo, listarPsicologo } from "../model/psicologoModel.js";

export async function CriarPsico(req, res){

    const{nome, email, senha, crp, especialidade, preco_sessao, bio} = req.body;

    try {
        const psico = await criarPsicologo (nome, email, senha, crp, especialidade, preco_sessao, bio)

        if(!psico) res.status(400).json({message: "Informação não introduzida ou incorreta"})

            res.status(200).json(psico);
        
    } catch (error) {
        res.status(500).json({message: "Erro ao criar psicólogo"})
        console.log(error)
        
    }
}

export async function ListarPsico(req,res){

    try {
        const psico = await listarPsicologo()

        if(!psico) res.status(400).json({message: "Psicólogo não encontrado"})
            res.status(200).json(psico);
    } catch (error) {
        res.status(500).json({message: "Erro ao listar psicólogo"})
        console.log(error)
        
    }
}

export async function BuscarPsico (req,res){

    const id = req.params.id;

    try {
        const psico = await buscarPsicologo(id)

        if(!psico) res.status(400).json({message: "Psicólogo não encontrado"})

        res.status(200).json({message: "Busca realizada.", psico});
        
    } catch (error) {
        res.status(500).json({message:"Erro ao buscar psicólogo"});
        console.log(error)
    }
}

export async function DeletarPsico(req, res){

    const id = req.params.id

    try {
        const psico = await deletarPsicologo(id)

        if(!psico) res.status(400).json({message: "Psicólogo não encontrado"})

        res.status(200).json({message: "Psicólogo deletado com sucesso!"});

        } catch (error){
            res.status(500).json({message:"Erro ao deletar psicólogo"});
            console.log(error);
        }
}

export async function AtualizarPsico(req, res){

    const id= req.params.id
    const {nome, email, senha, especialidade, preco_sessao, bio} = req.body

    try {
        const psico = await atualizarPsicologo(id, {nome, email, senha, especialidade, preco_sessao, bio})

        if(!psico) res.status(404).json({message: "Psicólogo não encontrado"})

        res.status(200).json({message: "Atualização feita com sucesso!", psico});
        
    } catch (error) {
        res.status(500).json({message: "Erro ao atualizar psicólogo"})
        console.log(error)
        
    }
}

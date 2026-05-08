import { criarPsicologo, listarPsicologo } from "../model/psicologoModel.js";

export async function CriarPsico(req, res){

    const{nome, email, crp, especialidade} = req.body;

    try {
        const psico = await criarPsicologo (nome, email, crp, especialidade)

        if(!psico) res.status(400).json({message: "Informação não introduzida ou incorreta"})

            res.status(200).json(psico);
        
    } catch (error) {
        res.status(500).json({message: "Erro ao criar psicologo"})
        console.log(error)
        
    }
}

export async function ListarPsico(req,res){

    try {
        const psico = await listarPsicologo()

        if(!user) res.status(400).json({message: "Psicologo não encontrado"})
            res.status(200).json(psico);
    } catch (error) {
        res.status(500).json({message: "Erro ao listar psicologo"})
        console.log(error)
        
    }
}

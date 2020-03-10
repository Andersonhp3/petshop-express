const PetModel = require("../model/Pet")

const PetController = {
    index: (req,res)=>{
        res.send(PetModel.listarPets());
    },
    add: (req,res)=>{
        let novoPet = (req.params);

        PetModel.adicionarPet(novoPet);
        res.send(`${novoPet.nome} foi adicionado!`);
    },
    show: (req,res)=>{
        let nomepet = (req.params);
        let mostrar = PetModel.buscarPet(nomepet);
        res.send(`Foi encontrado ${mostrar.length} com esse nome: ${nomepet.nome}`);
    },
    servico: (req,res)=>{
        let nomepet = (req.params.nome);
        let servico = (req.params.servico1)
        let resultado = PetModel.atenderPet(nomepet,servico);
        
        res.send(``);
    },


};


module.exports = PetController;
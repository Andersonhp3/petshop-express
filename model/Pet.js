

let pets = [pet = {
    nome: "Adolfo",
    raca: "Cão",
    idade: 12,
    genero: "M",
    servicos: [],
    tipo: "Grande",
    vacinado: false
},
pet2 = {
    nome: "fii",
    raca: "Cão",
    idade: 6,
    genero: "M",
    servicos: [],
    tipo: "pequeno",
    vacinado: true
},
pet3 = {
    nome: "tooo",
    raca: "gato",
    idade: 3,
    genero: "M",
    servicos: ["Tosa"],
    tipo: "Grande",
    vacinado: false
},
pet4 = {
    nome: "julio",
    raca: "Cão",
    idade: 8,
    genero: "m",
    servicos: ["Banho"],
    tipo: "pequeno",
    vacinado: false
}
];

const listarPets = () => {
    let conteudo = `===Projeto Petshop===<br>
    ----------------------<br>`;
    for(let dado in pets){
        conteudo += `
        Nome: ${pets[dado].nome}<br>
        Raça: ${pets[dado].raca}<br>
        Idade: ${pets[dado].idade}<br>
        Genero: ${pets[dado].genero == "m" ? "Macho" : "Femea"}<br>
        Serviços: ${pets[dado].servicos}<br>
        Tipo: ${pets[dado].tipo}<br>
        Vacinado: ${pets[dado].vacinado ? "Sim" : "Não"}<br>
        ----------------------<br>`;
    }
    return conteudo;
}

const adicionarPet = (novoPet) => {
    if (typeof novoPet == "object" && validarInfo(novoPet)) {
        novoPet.nome = novoPet.nome.toString();
        novoPet.idade = parseInt(novoPet.idade);
        if(!novoPet.servicos){
            novoPet.servicos = [];
        }
        novoPet.vacinado
        if (!novoPet.vacinado) {
            novoPet.vacinado = false;            
        }

        pets.push(novoPet);
        console.log(` ${novoPet.nome} foi adicionado com sucesso!`);
    }
};

const validarInfo = novoPet => {
    return (
        novoPet.nome &&
        novoPet.idade && 
        novoPet.tipo &&
        novoPet.genero && 
        novoPet.raca
    );
};

const buscarPet = (nomePet) => {
    let petsEncontrados = pets.filter(pet => pet.nome == nomePet.nome);
    
    return petsEncontrados;
}

const tosarPet = pet =>{
    pet.servicos.push('tosa')
    console.log(`${pet.nome} +  foi tosado`);
}

const cortarUnhasPet = pet => {
    pet.servicos.push("corte de unhas");
    console.log(`${pet.nome} unhas foram cortadas!`);
}

const atenderPet = (pet, ...operacoes) => {
    let conteudo = `Bem vindo, " + ${pet.nome}`;
    for (let i = 0; i < operacoes.length; i++) {
       operacoes[i](pet);
    }    
    const pagar = () => {
        console.log("Pagamento realizado com sucesso!");        
    }
    pagar();

    console.log("Volte sempre!");
}

module.exports = { 
    listarPets,
    adicionarPet,
    buscarPet,
    atenderPet,
    tosarPet,
    cortarUnhasPet };
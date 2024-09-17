let carroDosSonhos = {
    marca: "Tesla",
    modelo: "Model 3",
    cor: "Branco",
    ano: 2024,
    combustivel: "Elétrico",
    quilometragem: 0,
    preço: 300000,
    ligado: false,

    ligar: function(){
        this.ligado = true
        console.log("O carro está ligado.");
    }
};

carroDosSonhos.ligar();

console.log(carroDosSonhos)
Cachorro = {
    nome: 'Gordo',
    idade: 13,
    Raça: ['Caramelo'],
    Cor: ['Marrom com branco'],
    MeuCachorro: function(){

       console.log(`Esse é o meu cachorro ${this.nome}, ele tem ${this.idade} anos, é da raça ${this.Raça} da cor ${this.Cor}`)
    }
}

Cachorro.MeuCachorro()
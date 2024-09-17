const Inventario = ["tartaruga motivada", "espada de diamante encantada", "lança de 10 centimetros" ]
console.log("Seu inventário inicial:", Inventario);

let NovoItem = "AK47"
Inventario.push(NovoItem)

console.log("Você encontrou um baú! Novo item adicionado ao seu inventário:", Inventario)

let itemUsado1 = Inventario[0];
console.log(` Você ataca o globlin com sua ${itemUsado1}!`);
console.log(" GLOBLIN MORREU ");
console.log(" A TARTARUGA TAMBÉM ");
console.log(" <p> MUSICA DRAMATICA NO FUNDO <p> ");

let itemUsado2 = Inventario[3]
console.log(`Você finalizada o goblin no chão com sua ${itemUsado2}`);
console.log("Cada disparo tem roubo de vida, recuperando todo o HP da batalha")

console.log("Você venceu a batalha e derrotou o globin")



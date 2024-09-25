let preço1 = 9000

if (preço1 <= 100){
    console.log("Valor final: R$ " + preço1.toFixed(2));
}

else if(preço1 > 100 && preço1 <=Infinity){
    let desconto = preço1 * 0.10
    console.log("Desconto: R$ " + (preço1 - desconto).toFixed(2))
}

else {
    let desconto = preço1 * 0.15
    console.log("Valor final: R$ " + (valorCompra - desconto).toFixed(2))
}
function dividirPrimeiroUltimoporDois(numeros){
let primeiro = numeros [0]/2
let ultimo = numeros [numeros.length-1]/2
return[primeiro, ultimo]
}

let arrayNumeros = [10,20,30,40,50]
let resultado = dividirPrimeiroUltimoporDois(arrayNumeros)

console.log("Novo array", resultado)
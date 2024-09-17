    function gerarAdjetivo(nome){
 const adjetivos = ["iluminado", "romantico", "engraçado (eu acho)", "simpatia"]

 const indiceAleatorio = Math.floor(Math.random() * adjetivos.length)

 return nome+ " você é  ou tem " + adjetivos[indiceAleatorio]

}

console.log(gerarAdjetivo("Caue"))


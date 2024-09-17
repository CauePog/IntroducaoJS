function calcularMedia (m1, m2, m3, m4, m5) {
    let Media = (m1+m2+m3+m4+m5) / 5
    return `Sua média é`, Media
}

let notasVagner = calcularMedia(5.9, 4.7, 9.2, 2.0, 9.9)
console.log("A nota do Vagner é: ", notasVagner.toFixed(2))

let notasRobersvaldo = calcularMedia(9.5, 8.0, 9.9, 1.3, 3,6)
console.log("A nota do Robersvaldo é: ", notasRobersvaldo.toFixed(2)) 
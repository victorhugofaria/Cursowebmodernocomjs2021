const { reject } = require("lodash")

function gerarNumerosEntre(min , max, numerosProibidos) {
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if(numerosProibidos.includes(aleatorio)) {
            reject("Número repetido!")
        }else {
            resolve(aleatorio)
        }
    })
}


gerarNumerosEntre(1, 5 [1, 2, 4])
    .then(console.log)
    .catch(console.log)
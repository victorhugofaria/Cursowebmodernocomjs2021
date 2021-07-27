function funcionarouNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject("Ocorreu um erro!")
        }else {
            resolve(valor)
        }
    })
}

funcionarouNao("Testando...", 0.5)
    .then(v => console.log(`Valor: ${v}`))
    .catch(err => console.log(`Erro: ${err}`))
    .then(() => console.log("Fim!"))

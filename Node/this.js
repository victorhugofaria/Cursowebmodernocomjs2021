console.log(this === global)
console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log("Dentro de uma função...")
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

}

logThis()

// this dentro de uma função aponta global, fora de uma função, dentro de um módulo ele aponta
// para module.exports
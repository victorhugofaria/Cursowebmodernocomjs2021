let a = 1
console.log(a)

let p = new Promise(function(cumprimirPromessa){
    cumprimirPromessa(3)
})

console.log(typeof p)

p.then(function(valor) {
    console.log(valor)

})


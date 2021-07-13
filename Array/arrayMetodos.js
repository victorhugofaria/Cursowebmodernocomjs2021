const pilotos = ["Vettel", "Alonso", "Senna", "Massa"]
pilotos.pop() // massa quebrou o carro!
console.log(pilotos)

pilotos.push("Verstappen") // adiciona elemento
console.log(pilotos)

pilotos.shift() //remove o primeiro!
console.log(pilotos)

pilotos.unshift("Hamilton") // adiciona na primeira posição
console.log(pilotos)

// splice pode adicionar e remover elementos

// adicionar
pilotos.splice(2, 0, "Botas", "Massa")

// remover
pilotos.splice(3, 1)
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) // novo array
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)
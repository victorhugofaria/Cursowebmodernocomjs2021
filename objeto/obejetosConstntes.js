// pessoa -> 123 --> {...}
const pessoa = {nome: "Joao"}
pessoa.nome = "Pedro"

console.log(pessoa)

// pessoa -> 456 -> {...}
//pessoa = {nome: "Maria"}

Object.freeze(pessoa) // congela o objeto, n dá para mexer nele, nem mesmo exclui-lo.

pessoa.nome = "Maria"
pessoa.end = "Rua 13"
console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: "Victor"})
pessoa.pessoaConstante = "Paulo"
console.log(pessoaConstante)

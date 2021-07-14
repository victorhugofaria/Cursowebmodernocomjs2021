const alunos = [
    {nome: "Lucas", nota: 7.4, bolsista: false},
    {nome: "Paula", nota: 9.2, bolsista: true},
    {nome: "Euzebio", nota: 9.8, bolsista:false},
    {nome: "Valentina", nota: 8.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador,atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)
const alunos = [
    {nome: "Lucas", nota: 7.4, bolsista: false},
    {nome: "Paula", nota: 9.2, bolsista: true},
    {nome: "Euzebio", nota: 9.8, bolsista:false},
    {nome: "Valentina", nota: 8.7, bolsista: true}
]

// Desafio 1: Todos os alunos são bolsistas?
    const todoBolsistas = (resultado, bolsista) => resultado && bolsista
    console.log(alunos.map(a => a.bolsista).reduce(todoBolsistas))


// Desafio 2: Algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))
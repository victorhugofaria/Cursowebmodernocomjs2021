const escola = [{
    nome: "Turma M1" ,
    aluno: [{
        nome: "Gustavo",
        nota: 8.1
    },{
    nome: "Ana",
    nota: 9.3
}]
}, {
    nome: "Turma M2",
    aluno: [{
        nome: "Rebeca",
        nota: 8.9
    },{
        nome: "Roberto",
        nota: 7.3
    }]    
}]

const getNotaDoAluno = a => aluno.nota
const getNotasDaTurma = turma => turma.alunos.map(getNotaDoAluno)

const notas1 = escola.map(getNotasDaTurma)
console.log(notas1)
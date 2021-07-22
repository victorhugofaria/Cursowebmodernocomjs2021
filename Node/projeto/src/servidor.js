const porta = 3003

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancodeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res, next) => {
    res.send(bancodeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
      res.send(bancodeDados.getProduto(req.params.id))
})

app.put('/produtos/:id', (req, res, next)=>{
    const produto = bancodeDados.salvarProduto({
        id: req.params.id,
        nome:  req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.delete('./produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) // JSON
})
app.listen(porta, () => {
    console.log(`Servidor  está executando na porta ${porta}.`)
})
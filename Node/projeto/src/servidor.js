const porta = 3003

const express = require('express')
const app = express()
const bancodeDados = require('./bancoDeDados')


app.get('/produtos', (req, res, next) => {
    res.send(bancodeDados.getProdutos())
})

app.get('/produtos/:id', (req, res, next) => {
      res.send(bancodeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next)=>{
    const produto = bancodeDados.salvarProduto({
        nome:  req.body.name,
        preco: req.body.preco
    })
    res.send(produto) // JSON
})

app.listen(porta, () => {
    console.log(`Servidor  está executando na porta ${porta}.`)
})
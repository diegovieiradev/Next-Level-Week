const express = require('express')
const server = express()

const { 
    pageLanding, 
    pageGiveClasses, 
    pageStudy,
    saveClasses
} = require('./pages')

const nunjucks = require('nunjucks')

//configurar nunjucks (TEMPLATE ENGINE)
nunjucks.configure('src/views',{
    express: server,
    noCache: true,
})

//INICIO E CONFIGURAÇÃO DO SERVIDOR
server
// receber os dados do req.body
.use(express.urlencoded({ extended: true }))
// configurar arquivos estáticos (css, scripts, imagens)
.use(express.static("public"))
// rotas da aplicação
.get("/", pageLanding)
.get("/study",pageStudy) 
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses) 
//START DO SERVIDOR
.listen(5000)
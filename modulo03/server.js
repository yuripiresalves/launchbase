const express = require('express')
const nunjucks = require('nunjucks')
const videos = require('./data')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server
})

server.get("/", (req, res) => {
    return res.render('about')
})

server.get("/portfolio", (req, res) => {
    return res.render('portfolio', { items: videos })
})

server.listen(5000, () => {
    console.log('pai ta on')
})
const express = require('express')
const nunjukcs = require('nunjucks')
const routes = require('./routes')

const server = express()

server.use(express.static('public'))
server.use(routes)

server.set('view engine', 'njk')

nunjukcs.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(5000, () => {
    console.log('pai ta on')
})
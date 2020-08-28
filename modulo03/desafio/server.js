const express = require('express')
const nunjukcs = require('nunjucks')
const courses = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjukcs.configure('views', {
    express: server
})

server.get("/", (req, res) => {
    return res.render("courses", { courses })
})

server.get("/about", (req, res) => {
    return res.render("about")
})

server.use(function(req, res) {
    res.status(404).render("not-found")
  })

server.listen(5000, () => {
    console.log('pai ta on')
})
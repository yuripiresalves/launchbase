const express = require('express')
const routes = express.Router()
const teachers = require('./teachers')

routes.get('/', (req, res) => {
    res.redirect('/teachers')
})

routes.get('/teachers', (req, res) => {
    return res.render('teachers/index')
})

routes.get('/teachers/create', (req, res) => {
    return res.render('teachers/create')
})

routes.post('/teachers', teachers.post)

routes.get('/students', (req, res) => {
    return res.send('students')
})

routes.use(function (req, res) {
    res.status(404).send("not-found")
})

module.exports = routes
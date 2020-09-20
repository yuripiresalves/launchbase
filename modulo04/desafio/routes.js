const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    res.redirect('/teachers')
})

routes.get('/teachers', (req, res) => {
    return res.send('teachers')
})

routes.get('/students', (req, res) => {
    return res.send('students')
})

routes.use(function (req, res) {
    res.status(404).send("not-found")
})

module.exports = routes
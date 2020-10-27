const { date, grade } = require('../../lib/utils')
const Student = require('../models/Student')

module.exports = {
  index(req, res) {

    Student.all((students) => {
      return res.render('students/index', { students })
    })
  },
  create(req, res) {
    return res.render('students/create')
  },
  post(req, res) {

    const keys = Object.keys(req.body)

    for (const key of keys) {

      if (req.body[key] == "") {
        return res.send("Por favor, preencha todos os campos!")
      }
    }

    Student.create(req.body, (student) => {
      return res.redirect(`/students/${student.id}`)
    })
  },
  show(req, res) {

    Student.find(req.params.id, (student) => {
      if (!student) return res.send('Student not found!')

      student.birth = date(student.birth).birthDay
      student.grade = grade(student.grade)

      return res.render('students/show', { student })
    })
  },
  edit(req, res) {

    Student.find(req.params.id, (student) => {
      if (!student) return res.send('Student not found!')

      student.birth = date(student.birth).iso

      return res.render('students/edit', { student })
    })
  },
  update(req, res) {

    const keys = Object.keys(req.body)

    for (const key of keys) {

      if (req.body[key] == "") {
        return res.send("Por favor, preencha todos os campos!")
      }
    }

    Student.update(req.body, () => {
      return res.redirect(`/students/${req.body.id}`)
    })
  },
  delete(req, res) {

    Student.delete(req.body.id, () => {
      return res.redirect(`/students`)
    })
  },
}
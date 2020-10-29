const { age, graduation, date } = require('../../lib/utils')
const Teacher = require('../models/Teacher')

module.exports = {
  index(req, res) {

    const { filter } = req.query

    if (filter) {
      Teacher.findBy(filter, (teachers) => {
        return res.render('teachers/index', { teachers, filter })
      })
    } else {
      Teacher.all((teachers) => {
        return res.render('teachers/index', { teachers })
      })
    }
  },
  create(req, res) {
    return res.render('teachers/create')
  },
  post(req, res) {

    const keys = Object.keys(req.body)

    for (const key of keys) {

      if (req.body[key] == "") {
        return res.send("Por favor, preencha todos os campos!")
      }
    }

    Teacher.create(req.body, (teacher) => {
      return res.redirect(`/teachers/${teacher.id}`)
    })
  },
  show(req, res) {

    Teacher.find(req.params.id, (teacher) => {
      if (!teacher) return res.send('Teacher not found!')

      teacher.age = age(teacher.birth_date)
      teacher.graduation = graduation(teacher.education_level)
      teacher.classes_type = teacher.class_type
      teacher.classes = teacher.subjects_taught.split(',')
      teacher.created_at = date(teacher.created_at).format

      return res.render('teachers/show', { teacher })
    })
  },
  edit(req, res) {

    Teacher.find(req.params.id, (teacher) => {
      if (!teacher) return res.send('Teacher not found!')

      teacher.birth = date(teacher.birth_date).iso
      teacher.graduation = teacher.education_level
      teacher.classes_type = teacher.class_type
      teacher.classes = teacher.subjects_taught.split(',')
      teacher.created_at = date(teacher.created_at).format

      return res.render('teachers/edit', { teacher })
    })
  },
  update(req, res) {

    const keys = Object.keys(req.body)

    for (const key of keys) {

      if (req.body[key] == "") {
        return res.send("Por favor, preencha todos os campos!")
      }
    }

    Teacher.update(req.body, () => {
      return res.redirect(`/teachers/${req.body.id}`)
    })
  },
  delete(req, res) {

    Teacher.delete(req.body.id, () => {
      return res.redirect(`/teachers`)
    })
  },
}
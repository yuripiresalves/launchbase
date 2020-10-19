const fs = require('fs')
const data = require('../data.json')
const { age, graduation, date } = require('../utils')

exports.index = (req, res) => {
    return res.render('teachers/index', { teachers: data.teachers })
}

exports.create = (req, res) => {
    return res.render('teachers/create')
}

exports.post = (req, res) => {

    const keys = Object.keys(req.body)

    for (const key of keys) {

        if (req.body[key] == "") {
            return res.send("Por favor, preencha todos os campos!")
        }
    }

    let { avatar_url, name, birth, graduation, classes_type, classes } = req.body

    birth = Date.parse(birth)

    let id = 1
    const lastTeacher = data.teachers[data.teachers.length - 1]

    if (lastTeacher) {
        id = lastTeacher.id + 1
    }
    
    const created_at = Date.now()

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        graduation,
        classes_type,
        classes,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) return res.send("Write file error!")

        return res.redirect(`/teachers/${id}`)
    })

}

exports.show = (req, res) => {

    const { id } = req.params

    const foundTeacher = data.teachers.find((teacher) => {
        return teacher.id == id
    })

    if (!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
        ...foundTeacher,
        age: age(foundTeacher.birth),
        graduation: graduation(foundTeacher.graduation),
        classes: foundTeacher.classes.split(","),
        created_at: new Intl.DateTimeFormat("pt-BR").format(foundTeacher.created_at)
    }

    return res.render('teachers/show', { teacher })
}

exports.edit = (req, res) => {

    const { id } = req.params

    const foundTeacher = data.teachers.find((teacher) => {
        return teacher.id == id
    })

    if (!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
        ...foundTeacher,
        birth: date(foundTeacher.birth).iso
    }

    return res.render('teachers/edit', { teacher })
}

exports.update = (req, res) => {

    const { id } = req.body
    let index = 0

    const foundTeacher = data.teachers.find((teacher, foundIndex) => {
        if (teacher.id == id) {
            index = foundIndex
            return true
        }
    })

    if (!foundTeacher) return res.send("Teacher not found!")

    const teacher = {
        ...foundTeacher,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.teachers[index] = teacher  

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) return res.send("Write file error!")

        return res.redirect(`/teachers/${id}`)
    })
}

exports.delete = (req, res) => {

    const { id } = req.body

    const filteredTeachers = data.teachers.filter((teacher) => {
        return teacher.id != id
    })

    data.teachers = filteredTeachers

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) return res.send("Write file error!")

        return res.redirect('/teachers')
    })
}
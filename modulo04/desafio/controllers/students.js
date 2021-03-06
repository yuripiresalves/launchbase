const fs = require('fs')
const data = require('../data.json')
const { date, grade } = require('../utils')

exports.index = (req, res) => {
    return res.render('students/index', { students: data.students })
}

exports.create = (req, res) => {
    return res.render('students/create')
}

exports.post = (req, res) => {

    const keys = Object.keys(req.body)

    for (const key of keys) {

        if (req.body[key] == "") {
            return res.send("Por favor, preencha todos os campos!")
        }
    }


    birth = Date.parse(req.body.birth)
    let id = 1
    const lastStudent = data.students[data.students.length - 1]

    if (lastStudent) {
        id = lastStudent.id + 1
    }

    data.students.push({
        id,
        ...req.body,
        birth, 
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) return res.send("Write file error!")

        return res.redirect(`/students/${id}`)
    })

}

exports.show = (req, res) => {

    const { id } = req.params

    const foundStudent = data.students.find((student) => {
        return student.id == id
    })

    if (!foundStudent) return res.send("Student not found!")

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).birthDay,
        grade: grade(foundStudent.grade),
    }

    return res.render('students/show', { student })
}

exports.edit = (req, res) => {

    const { id } = req.params

    const foundStudent = data.students.find((student) => {
        return student.id == id
    })

    if (!foundStudent) return res.send("Student not found!")

    const student = {
        ...foundStudent,
        birth: date(foundStudent.birth).iso
    }

    return res.render('students/edit', { student })
}

exports.update = (req, res) => {

    const { id } = req.body
    let index = 0

    const foundStudent = data.students.find((student, foundIndex) => {
        if (student.id == id) {
            index = foundIndex
            return true
        }
    })

    if (!foundStudent) return res.send("Student not found!")

    const student = {
        ...foundStudent,
        ...req.body,
        birth: Date.parse(req.body.birth),
        id: Number(req.body.id)
    }

    data.students[index] = student  

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) return res.send("Write file error!")

        return res.redirect(`/students/${id}`)
    })
}

exports.delete = (req, res) => {

    const { id } = req.body

    const filteredStudents = data.students.filter((student) => {
        return student.id != id
    })

    data.students = filteredStudents

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) return res.send("Write file error!")

        return res.redirect('/students')
    })
}
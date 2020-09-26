const fs = require('fs')
const data = require('./data.json')
// Create
exports.post = (req, res) => {

    const keys = Object.keys(req.body)

    for (const key of keys) {

        if (req.body[key] == "") {
            return res.send("Por favor, preencha todos os campos!")
        }
    }

    let { avatar_url, name, birth, escolaridade, classes_type, classes } = req.body

    birth = Date.parse(birth)
    const id = Number(data.teachers.length + 1)
    const created_at = Date.now()

    data.teachers.push({
        id,
        avatar_url,
        name,
        birth,
        escolaridade,
        classes_type,
        classes,
        created_at
    })

    fs.writeFile("data.json", JSON.stringify(data, null, 2), (err) => {
        if(err) return res.send("Write file error!")

        return res.redirect('/teachers')
    })

}
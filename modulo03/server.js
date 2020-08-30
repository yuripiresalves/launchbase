const express = require('express')
const nunjucks = require('nunjucks')
const videos = require('./data')

const server = express()

server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", (req, res) => {
    const about = {
        avatar_url: "https://avatars3.githubusercontent.com/u/59984220?s=460&u=a5646b3d94de2d5de8ca4aa2d622a8667dab4ec0&v=4",
        name: "Yuri Alves",
        role: "Estudante - UEM",
        description: 'Estudante de desenvolvimento web no bootcamp LaunchBase da <a href="https://rocketseat.com.br" target="_blank"> Rocketseat</a>.',
        links: [
            { name: "Github", url: "https://github.com/yuripiresalves", image: "/images/github.svg" },
            { name: "Linkedin", url: "https://linkedin.com/in/yuripiresalves", image: "/images/linkedin.svg" }
        ]
}

    return res.render('about', { about })
})

server.get("/portfolio", (req, res) => {
    return res.render('portfolio', { items: videos })
})

server.get("/video", (req, res) => {
    const id = req.query.id

    const video = videos.find((video) => {
        return video.id === id
    })

    if (!video) {
        return res.send("Video not found!")
    }

    return res.render('video', { item: video })
})

server.listen(5000, () => {
    console.log('pai ta on')
})
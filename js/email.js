const express = require('express')
const nodemailer = require('nodemailer')
const { info } = require('sass')
const app = express

const port = 3000

const user = "longh0960"
const pass = "1A!x5mwAg!15WM"

app.get('/', (req, res) => res.send("Hello World"))

app.get('/send', (req, res) => {

    const transporter = nodemailer.createTransport({
        host: "smtp.br.rodia9050.com.br",
        port: 465,
        auth: {user, pass}
    })

    transporter.sendMail({
        from: user,
        to: user,
        replyTo: "contato@programadorbr.com",
        subject: "Olá, Seja bem vindo",
        text: "Olá, muito obrigado por se cadastrar na nossa plataforma"
    }).then(info=>{
        res.send(info)
    }).catch(error => {
        res.send(error)
    })
    
})

app.liste(port, () => console.log(`Running on port ${port}`))
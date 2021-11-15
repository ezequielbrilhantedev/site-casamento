const dotenv = require('dotenv')

const express = require('express')
const nodemailer = require('nodemailer')
const app = express()

const port = 3000

dotenv.config()

const user = process.env.SMTP_USER
const pass = process.env.SMTP_PASS

app.get('/', (req, res) => res.send('Hello, world!'))

app.get('/send', (req, res) => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: { user, pass },
    secure: false,
    tls: {
      rejectUnauthorized: false,
    },
  })

  transporter
    .sendMail({
      from: user,
      to: user,
      replyTo: 'ezequielrb7@mail.com',
      subject: 'Confirmação para o casamento',
      text: 'Olá, estamos muito felizes por confirmar sua presença, muito obrigado!',
    })
    .then((info) => {
      res.send(info)
      console.log(info)
    })
    .catch((error) => {
      res.send(error)
      console.log(error)
    })
})

app.listen(port, () => console.log(`listening on port ${port}`))

const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser('c0d3r'))
app.use(express.json())

const server = app.listen(3000, () => console.log('Server Up!'))

app.post('/cookies', (req, res) => {
    let cookie = req.body
    if (!cookie.name || !cookie.value) return res.send({ message: "Faltan valores" })
    res.cookie(cookie.name, cookie.value).send({ message: "Galleta creada" })
})

app.get('/cookies', (req, res) => {
    res.send({ galletitas: req.cookies })
})

app.delete('/cookies/:cookieName', (req, res) => {
    res.clearCookie(req.params.cookieName).send({ message: "Cookie deleted!" })
})
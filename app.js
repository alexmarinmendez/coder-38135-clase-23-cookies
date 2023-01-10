const express = require('express')
const cookieParser = require('cookie-parser')
const app = express()

app.use(cookieParser())
app.use(express.json())

const server = app.listen(3000, () => console.log('Server Up!'))

app.get('/set-cookie', (req, res) => {
    res.cookie('coderhouse', 'Coder was here again!!').send({ message: "Cookie setted!" })
})

app.get('/get-cookie', (req, res) => {
    res.send(req.cookies.coderhouse)
})

app.get('/clear/:cookieName', (req, res) => {
    const {cookieName} = req.params
    res.clearCookie(cookieName).send({ message: 'Cookie deleted!' })
})
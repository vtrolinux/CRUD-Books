const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')
require('dotenv').config()

//config handlebars
app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')
app.use(express.json())
app.use(express.static('public'))

//body parser, necessario para se trabalhar com forms
app.use(express.urlencoded({ extended: true }))
//routes
const routeBooks = require('./routes/booksRoutes')
app.use('/books', routeBooks)

app.get('/', function (req, res) {
    res.render('home')
})

app.listen(3000,() => {
    console.log('running on port: 3000')
})
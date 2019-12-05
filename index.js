const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()

app.use(require('morgan')('combined'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(require('express-session')({ secret: 'Secret key', resave: false, saveUninitialized: false }))

app.use(authenticate.passport.initialize())
app.use(authenticate.passport.session())

// set the view engine to ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '.', '/views'))
app.use(express.static(path.join(__dirname, '.', 'views')))

app.get('/', function (req, res) {
    res.render('index')
})

function redirectUnmatched (req, res) {
    res.redirect('/')
}

app.use(redirectUnmatched)
app.listen(8080, function () {
    console.log('server listening at port 8080')
})
const express = require('express')
const app = express()
const session = require('express-session')
const passport = require('passport')
const bodyParser = require('body-parser')
const path = require('path')
const utils = require('./lib/utils.js')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')
app.set('port', process.env.PORT || 3000)
app.use(express.static(path.join(__dirname, 'public')))

// --- ROUTES ---
app.use('/', require('./controllers/index'))

app.use(session({
  secret: 'owo_what_a_secret',
  resave: true
}))
app.use(passport.initialize())
app.use(passport.session())

//handle 404
app.use( (req, res, next) => {
  res.status(400)
  res.send('http://dean.is-a.dog') //hi dean
})

app.use( (req, res, next) => {
  res.status(500)
})

app.listen(app.get('port'), () => {
  console.log('Listening on port: ', app.get('port'))
})

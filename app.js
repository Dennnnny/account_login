const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const port = 3000
const checkAccount = require('./account_check.js')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const account = req.body

  const message = checkAccount(account)

  // console.log(typeof (message))

  if (typeof (message) === 'object') {
    // console.log(`a:${message}`)
    res.render('home', { account: account, message: message.firstName })
  } else {
    // console.log(`b:${message}`)
    res.render('index', { account: account, message: message })
  }
})

app.listen(port, () => {
  console.log(`it's now running on https://localhost:${port}`)
})
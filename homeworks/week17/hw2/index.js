const express = require('express')
const session = require('express-session')
const flash = require('connect-flash')
const app = express()
const port = process.env.PORT || 5001

const userController = require('./controllers/user')
const prizeController = require('./controllers/prize')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended:false }))
app.use(express.json())
app.use(flash())
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}))

app.get('/', (req, res) => {
    res.render('index')
  })
app.use((req, res, next) => {
    res.locals.username = req.session.username
    res.locals.errorMessage = req.flash('errorMessage')
    next()
})

function redirectBack(req, res) {
  res.redirect('back')
}

// function checkPermission(req, res, next) {
//   if (!res.locals.username) {
//     return res.redirect('login')
//   }
//   return next()
// }

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => { res.render('index') })
app.get('/all', (req, res) => { res.render('all') })

app.get('/login', userController.login)
app.get('/logout', userController.logout)
app.post('/login', userController.handleLogin, redirectBack)
app.get('/api', prizeController.api)
app.get('/admin', prizeController.getAll)
app.get('/add', prizeController.add)
app.post('/add', prizeController.handleAdd, redirectBack)
app.get('/update/:id', prizeController.update)
app.post('/update/:id', prizeController.handleUpdate, redirectBack)
app.get('/delete/:id', prizeController.delete)


app.listen(port, () => {
    console.log(`跑起來了跑起來了 ${port}!`)
})
const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const flash = require('connect-flash')
const app = express()
const port = process.env.PORT || 5000

const userController = require('./controllers/user')
const articleController = require('./controllers/article')

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false })) // bodyParser
app.use(express.json())                        // bodyParser
app.use(session({                                // session
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
    }))
app.use(flash())                                  // errText
app.use((req, res, next) => {
    res.locals.username = req.session.username
    res.locals.errorMessage = req.flash('errorMessage')
    next()
})


app.get('/', articleController.index)
app.get('/all', articleController.all)
app.get('/about', articleController.about)
app.get('/categories', articleController.categories)
app.get('/account', articleController.account)

function redirectBack(req, res) {
    res.redirect('back')
}

app.get('/login', userController.login)
app.post('/login', userController.handleLogin, redirectBack)
app.get('/logout', userController.logout)
app.get('/register', userController.register)
app.post('/register', userController.handleRegister, redirectBack)
app.get('/add', articleController.add)
app.post('/articles', articleController.addArticle)
app.get('/delete_articles/:id', articleController.delete)
app.get('/update_articles/:id', articleController.update)
app.post('/update_articles/:id', articleController.handleUpdate)


app.listen(port, () => {
    console.log(`成功跑起 ${port} port 辣～～～！`)
}) 
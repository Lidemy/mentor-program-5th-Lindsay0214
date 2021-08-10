const bcrypt = require("bcrypt");
const saltRounds = 10;
const db = require("../models");
const User = db.User;

const userController = {
    login: (req, res) => {
      res.render('login')
    },
    handleLogin: (req, res, next) => {
      const { username, password } = req.body
      if (!username || !password) {
        req.flash("errorMessage", "還有地方沒填唷！")
        return next()
      }
      User.findOne({
        where: {
          username
        }
      }).then((user) => {
        if (!user) {
          req.flash("errorMessage", "迷有這個帳號喔～")
          return next()
        }
        bcrypt.compare(password, user.password, (err, isSuccess) => {
          if (err || !isSuccess) {
            req.flash("errorMessage", "密碼錯辣！")
            return next()
          }
          req.session.username = user.username
          res.redirect('admin')
        })
      }).catch(err => {
        req.flash('errorMessage', err.toString())
        return next()
      })
    },
    logout: (req, res) => {
      req.session.username = null
      res.redirect('/')
    }
  }
  
  module.exports = userController
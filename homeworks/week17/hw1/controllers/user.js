const bcrypt = require("bcrypt");
const saltRounds = 10;
const db = require("../models");
const User = db.User;

const userController = {
    login: (req,res) => {
        res.render("login");
    },

    handleLogin: (req, res, next) => {
        const { username, password } = req.body;
        if (!username || !password) {
            req.flash("errorMessage", "還有地方沒填唷！")
            return next()
        }

        User.findOne({
            where: {
                username,
            },
        })
        .then((user) => {
            if (!user) {
                req.flash("errorMessage", "迷有這個帳號喔～");
                return next();
            }

            bcrypt.compare(password, user.password, function (err, isSuccess) {
                if (err || !isSuccess) {
                  req.flash("errorMessage", "密碼錯辣！");
                  return next();
                }
                req.session.username = user.username;
                req.session.userId = user.id
                res.redirect("/");
              });
            })
            .catch((err) => {
              req.flash("errorMessage", err.toString());
              return next();
            });
        },

    logout: (req,res) => {
        req.session.username = null;
        res.redirect("/");
    },

    register: (req, res) => {
        res.render("register")
    },

    handleRegister: (req, res, next) => {
        const { username, password, nickname } = req.body;
    if (!username || !password || !nickname) {
      req.flash("errorMessage", "還有地方沒填唷！");
      return next();
    }

    bcrypt.hash(password, saltRounds, function (err, hash) {
      if (err) {
        req.flash("errorMessage", err.toString());
        return next();
      }

      User.create({
        username,
        nickname,
        password: hash,
      })
        .then( user => {
          req.session.username = username;
          req.session.userId = user.id
          res.redirect("/");
        })
        .catch((err) => {
          req.flash("errorMessage", err.toString());
          return next();
        });
    });
  }

};

module.exports = userController;
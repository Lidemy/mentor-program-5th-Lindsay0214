const db = require("../models");
const Article = db.Article
const User = db.User

const articleController = {
  addArticle: (req,res) => {
    const { userId } = req.session;
    const { title } = req.body;
    const { content } = req.body;
    if(!userId || !title || !content) {
      return res.redirect("/");
    }

    Article.create({
      title,
      content,
      UserId: userId
    }).then(() => {
      res.redirect('/account')
    })
  },

  add: (req,res) => {
    Article.findAll({
      include: User
    }).then(articles => {
      res.render("add", {
        articles
      })
    })
  },

  index: (req,res) => {
    Article.findAll({
      include: User
    }).then(articles => {
      res.render("index", {
        articles
      })
    })
  },

  all: (req,res) => {
    Article.findAll({
      include: User
    }).then(articles => {
      res.render("all", {
        articles
      })
    })
  },

  about: (req,res) => {
    Article.findAll({
      include: User
    }).then(articles => {
      res.render("about", {
        articles
      })
    })
  },

  categories: (req,res) => {
    Article.findAll({
      include: User
    }).then(articles => {
      res.render("categories", {
        articles
      })
    })
  },

  account: (req,res) => {
    Article.findAll({
      include: User
    }).then(articles => {
      res.render("account", {
        articles
      })
    })
  },

  delete: (req, res) => {
    Article.findOne({
      where: {
        id: req.params.id,
        UserId: req.session.userId
      }
    }).then(article => {
      return article.destroy()
    }).then(() => {
      res.redirect('/account')
    }).catch(() => {
      res.redirect('/account')
    })
  },

  update: (req, res) => {
    Article.findOne({
      where: {
        id: req.params.id
      }
    }).then(article => {
      res.render("update", {
        article
      })
    })
  },

  handleUpdate: (req, res) => {
    Article.findOne({
      where: {
        id: req.params.id,
        UserId: req.session.userId
      }
    }).then(article => {
      return article.update({
        title: req.body.title,
        content: req.body.content
      })
    }).then(() => {
      res.redirect('/account')
    }).catch(() => {
      res.redirect('/account')
    })
  }

};

module.exports = articleController;
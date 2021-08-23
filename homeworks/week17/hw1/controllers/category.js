const db = require("../models");
const Category = db.Category

const categoryController = {

  getAll: (req,res) => {
    Category.findAll({
      order:[['createdAt', 'DESC']]
    }).then(name => {
      res.render('name', {
        name
      })
    })
  },
  
  addCategory: (req,res) => {
    const { name } = req.body;
    if(!name) {
      return res.redirect("/categories");
    }
    Category.create({
      category
    }).then(name => {
      res.redirect('/categories')
    }).catch(err => {
      req.flash('errorMessage', 'errorMessage')
      return next()
    })
  },

  delete: (req, res, next) => {
    Category.findOne({
      where: {
        id: req.params.id,
      }
    }).then(name => {
      return name.destroy()
    }).then(() => {
      res.redirect('/categories')
    }).catch(() => {
      res.redirect('/categories')
      return next()
    })
  },

  update: (req, res) => {
    Category.findOne({
      where: {
        id: req.params.id
      }
    }).then(name => {
      res.render("update-category", {
        name
      })
    }).catch(err => {
      res.flash('errorMessage', 'errorMessage')
      return next()
    })
  },

  handleUpdate: (req, res, next) => {
    Category.findOne({
      where: {
        id: req.params.id
      }
    }).then(name => {
      return name.update({
        name
      })
    }).then(() => {
      res.redirect('/categories')
    }).catch(() => {
      res.flash('errorMessage', 'errorMessage')
      return next()
    })
  }

};

module.exports = categoryController;
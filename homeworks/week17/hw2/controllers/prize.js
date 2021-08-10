const db = require("../models")
const Prize = db.Prize
const User = db.User

function getRandom(max) {
  return Math.floor(Math.random() * max)
}

function getWeightedChoice(choices, weights) {
  const sumOfWeights = weights.reduce((acc, x) => acc + x, 0)
  let random = getRandom(sumOfWeights) + 1
  for (const [index, weight] of weights.entries()) {
    random = random - weight
    if (random <= 0) {
      return choices[index]
    }
  }
  throw new Error('唉唷，發生一點小錯誤了')
}

const prizeController = {
  api: (req, res) => {
    Prize.findAll(
    ).then(prizes => {
      const idArr = []
      const weightArr = []
      for (const prize of prizes) {
        idArr.push(prize.id)
        weightArr.push(prize.shot)
      }
      const prizeId = getWeightedChoice(idArr, weightArr)
      Prize.findOne({
        where: {
          id: prizeId
        }
      }).then(result => {
        res.json(result)
      })
    })
  },
  
  getAll: (req, res) => {
    Prize.findAll(
    ).then(prizes => {
      res.render('admin', {
        prizes
      })
    })
  },

  add: (req,res) => {
    Prize.findAll({
      include: User
    }).then(prizes => {
      res.render("add", {
        prizes
      })
    })
  },

  handleAdd: (req, res, next) => {
    const { title, desc, image, shot } = req.body
    if (!title || !desc || !image || !shot) {
      req.flash('errorMessage', '請填好填滿')
      return next()
    }
    Prize.create({
      title,
      desc,
      image,
      shot
    }).then(() => {
      res.redirect('admin')
    }).catch(err => {
      req.flash('errorMessage', err.toString())
      return next()
    })
  },

  update: (req, res, next) => {
    Prize.findOne({
      where: {
        id: req.params.id
      }
    }).then(prize => {
      res.render('update', {
        prize
      })
    }).catch(err => {
      req.flash('errorMessage', err.toString())
      return next()
    })
  },

  handleUpdate: (req, res, next) => {
    const { title, desc, image, shot } = req.body
    if (!title || !desc || !image || !shot) {
      req.flash('errorMessage', '請填好填滿')
      return next()
    }
    Prize.findOne({
      where: {
        id: req.params.id
      }
    }).then(prize => {
      return prize.update({
        title,
        desc,
        image,
        shot
      })
    }).then(() => {
      res.redirect('admin')
    }).catch((err) => {
      req.flash('errorMessage', err.toString())
      return next()
    })
  },

  delete: (req, res, next) => {
    Prize.findOne({
      where: {
        id: req.params.id
      }
    }).then(prize => {
      return prize.destroy()
    }).then(() => {
      res.redirect('admin')
    }).catch((err) => {
      req.flash('errorMessage', err.toString())
      return next()
    })
  }
}

module.exports = prizeController
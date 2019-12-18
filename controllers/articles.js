const Article = require('../models').Article

// get all articles
exports.index = (req,res) => {
  Article.findAll().then(data => res.send(data))
}

exports.ascnd10 = (req,res) => {
  Article.findAll({
    order:[
      ["id","DESC"],
    ],
    limit: 10
  }).then(data => res.send(data))
}
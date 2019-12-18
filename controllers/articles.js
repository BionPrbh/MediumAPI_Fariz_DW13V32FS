const Article = require('../models').Article

// get all articles
exports.index = (req,res) => {
  Article.findAll().then(data => res.send(data))
}
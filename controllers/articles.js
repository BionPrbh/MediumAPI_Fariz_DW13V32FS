const Articles = require('../models').Article

// get all articles
exports.index = (req,res) => {
  Articles.findAll().then(data => res.send(data))
}

exports.ascnd10 = (req,res) => {
  Articles.findAll({
    order:[
      ["id","DESC"],
    ],
    limit: 10
  }).then(data => res.send(data))
}


const Comments = require('../models').Comment
const Articles = require("../models").Article

exports.create = (req, res) => { 
  //  Comments.create(req.body).then(data => {
  //   Articles.findOne({
  //     attributes: {
  //       exclude:[
  //         "content",
  //         "image",
  //         "category_id",
  //         "category_name",
  //         "is_published",
  //         "is_archived",
  //         "slug",
  //         "author_id"
  //       ]
  //     },
  //     where: {
  //       id: req.params.article_id
  //     }
  //   }).then(details => {
  //     let format = {

  //     }
  //   })
  //  })
}
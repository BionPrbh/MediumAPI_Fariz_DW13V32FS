const Comments = require('../models').Comment
const Articles = require("../models").Article

exports.new = (req, res) => { 
  Comments.create(req.body).then(data => {
    Comments.findOne({
      include: [
        {
          model: Articles,
          as: 'Article',
          attributes:{
            exclude:[
              "content",
              "image",
              "category_id",
              "category_name",
              "is_published",
              "is_archived",
              "slug",
              "author_id",
              "createdAt",
              "updatedAt"
            ]
          }
        }
      ],
      attributes: {
        exclude:[
          "is_published",
          "is_archived",
          "article_id",
          "user_id",
          "updatedAt",
          "createdAt"
        ]
      },
      where: {
        id: data.id
      }
    }).then(details => {
      res.send(details)
    })
  })
}

exports.editcomment = (req, res) => {
  Comments.update(req.body).then(data => {
    Comments.findOne({
      include: [
        {
          model: Articles,
          as: 'Article',
          attributes:{
            exclude:[
              "content",
              "image",
              "category_id",
              "category_name",
              "is_published",
              "is_archived",
              "slug",
              "author_id",
              "createdAt",
              "updatedAt"
            ]
          }
        }
      ],
      attributes: {
        exclude:[
          "is_published",
          "is_archived",
          "article_id",
          "user_id",
          "updatedAt",
          "createdAt"
        ]
      },
      where: {
        id: data.id
      }
    }).then(details => {
      res.send(details)
    })  
  })
}

exports.deletecomment = (req,res) => {
  Comments.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => res.send(data))
}
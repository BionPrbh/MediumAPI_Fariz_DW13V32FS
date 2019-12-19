const Articles = require("../models").Article;
const Users = require("../models").User;
const Categories = require("../models").Category
const Comments = require("../models").Comment

// get all articles
exports.index = (req, res) => {
  Articles.findAll().then(data => res.send(data));
};

exports.ascnd10 = (req, res) => {
  Articles.findAll({
    order: [["id", "DESC"]],
    limit: 10
  }).then(data => res.send(data));
};

const Collate = (articlesData, usersData, categoriesData) => {
  let formatted = {
    title: articlesData.title,
    img: articlesData.image,
    content: articlesData.content,
    category: {
      id: categoriesData.category_id,
      name: categoriesData.name
    },
    createdBy: {
      id: usersData.author_id,
      email: usersData.email
    },
    createdAt: articlesData.createdAt,
    updatedAt: articlesData.updatedAt
  };
  return formatted;
};

exports.create = (req, res) => {
  Articles.create(req.body).then(articlesData => {
    Users.findOne({
      where: {
        id: articlesData.author_id
      }
    }).then(usersData => {
      Categories.findOne({
        where: {
          id: articlesData.category_id
        }
      }).then(categoriesData => {
        const format = Collate(articlesData, usersData, categoriesData);
        res.send(format)
      })
    })
  });
};

exports.update = (req, res) => {
  Articles.update(
    req.body,
    {
      where: {
        id: req.params.id
      }
    }
  ).then(data => {
      res.send({
        message:'you uyeee',
        data
      })
    })
}

exports.delete = (req, res) => {
  Articles.destroy({
    where:{
      id: req.params.id
    }
  }).then(res.send({message:'delete success'}))
}
``
exports.detailed = (req,res) => {
  Articles.findOne({
    include:[
      {
        model:Categories,
        as: 'Category',
        attributes: {
          exclude: [
            "is_published",
            "is_archived",
            "createdAt",
            "updatedAt"
          ]
        }
      },
      {
        model:Comments,
        as: 'Comment',
        attributes:{
          exclude: [
            "is_published",
            "is_archived",
            "article_id",
            "user_id"
          ]
        },
        where: {
          article_id: req.params.id
        }
      }
    ],
    attributes:{
      exclude: [
        "category_id",
        "category_name",
        "is_published",
        "is_archived",
        "slug",
        "author_id"
      ]
    },
    where: {
      id: req.params.id
    }
  }).then(data => res.send(data))
}
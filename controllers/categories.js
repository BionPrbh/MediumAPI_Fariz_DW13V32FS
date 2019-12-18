const Categories = require("../models").Category;
const Articles = require("../models").Article;

// retrieve all categories
exports.index = (req,res) => {
  Categories.findAll().then(data => res.send(data));
};

// add one category to table
exports.create = (req,res) => {
  Categories.create(req.body).then(data => 
    res.send({
      message: 'Successfully added one category',
      data
    })
  );
}

const Collate = (data) => {
  let cleaned = data.map(item => {
    let formatted = {
      id: item.id,
      title: item.title,
      category:{
        id: item.Category.id,
        name: item.Category.id
      },
      content: item.content,
      img: item.img,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt
    }
    return formatted
  })
  return cleaned
}

exports.getArticleByCategories = (req,res) => {
  Articles.findAll({
    attributes:{
      exclude:[
        "category_id",
        "category_name",
        "is_published",
        "is_archived",
        "slug",
        "author_id"
      ]
    },
    include:[{
      model: Categories,
      as: 'Category',
      attributes: {
        exclude:[
          "is_published",
          "is_archived",
          "createdAt",
          "updatedAt"
        ]
      }
    }],
    where:{
      category_id: req.params.category_id
    }
  }).then(data => res.send(Collate(data)))
}
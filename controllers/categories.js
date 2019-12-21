const Categories = require("../models").Category;
const Articles = require("../models").Article;

// retrieve all categories
exports.index = (req,res) => {
  Categories.findAll().then(data => {
    let arr = []
    data.map(item => {
      let format = {
        id:item.id,
        name:item.name
      }
      arr.push(format)
    })
    res.send(arr)
  });
};

// add one category to table
exports.create = (req,res) => {
  Categories.create(req.body).then(data => 
    res.send({
      id: data.id,
      name: data.name
    })
  );
}

exports.getArticleByCategories = (req,res) => {
  Articles.findAll({
    include:[
      {
        model: Categories,
        as: 'Category',
        attributes:{
          exclude:[
            "is_published",
            "is_archived",
            "createdAt",
            "updatedAt"
          ]
        }
      }
    ],
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
    where: {
      category_id: req.params.id
    }
  }).then(data => res.send(data))
}
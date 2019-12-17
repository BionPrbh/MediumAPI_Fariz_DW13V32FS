const Categories = require("../models").Category;

// get all categories
exports.index = (req,res) => {
  Categories.findAll().then(data => res.send(data));
};

exports.create = (req,res) => {
  Categories.create(req.body).then(data => 
    res.send({
      message: 'Successfully added one category',
      data
    })
  );
}
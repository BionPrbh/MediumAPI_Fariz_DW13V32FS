const Categories = require("../models").Category;

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
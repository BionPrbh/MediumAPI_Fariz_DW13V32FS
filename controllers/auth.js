const jwt = require('jsonwebtoken')
const models = require('../models')
const User = models.User

exports.login = (req,res) => {
  const { username, password } = req.body;
  User.findOne({
    where: {
      username,
      password
    }
  }).then(user => {
    if (user) {
      const token = jwt.sign({ id: user.id }, "my-secret-key");
      res.send({
        user,
        token
      });
    } else {
      res.send({
        message: "Invalid login!"
      });
    }
  });
  
  
}
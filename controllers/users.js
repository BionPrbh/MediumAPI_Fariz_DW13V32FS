const Users = require('../models').User

exports.new = (req,res) => {
  Users.create(req.body).then(data => {
    
    let format = {
      email:data.email,
      token:''
    }
    res.send(format)
  })
}
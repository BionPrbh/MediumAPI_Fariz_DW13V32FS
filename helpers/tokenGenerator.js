const jwt = require('jsonwebtoken');
const secretKey = 'x53ud945khh8fteb6' //process.env.SECRET_KEY;

function tokenGenerator(data) {
  let token = jwt.sign(data, secretKey)
  return token
}

module.exports = tokenGenerator
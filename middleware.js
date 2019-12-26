const jwt = require("express-jwt")

exports.authenticated = jwt({secret: 'my-secret-key'}) 

exports.authorized = (req,res,next) => {
  if (req.user_id != req.params.id) {
    return res.status(401).json({ message: "You are not authenticated." });
  }
  next();
}

exports.auth = (req, res, next) => {
  let authHeader = req.headers["authorization"];
  let token = authHeader && authHeader.split(" ")[1];

  if (token) {
    jwt.verify(token, secretKey, (err, decoded) => {
      if (err) {
        return res.status(403).json({
          msg: "Token is not valid",
          Error: err
        });
      }
      
      req.currentUser = decoded
      next();
    });
  } else {
    return res.status(403).json({
      msg: "You are not logged in, please Login and try again"
    });
  }

};
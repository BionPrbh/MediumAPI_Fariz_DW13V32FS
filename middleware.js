const jwt = require("express-jwt")

exports.authenticated = jwt({secret: 'my-secret-key'}) 

// exports.authorized = (req,res,next) => {
//   if (req.user_id != req.params.id) {
//     return res.status(401).json({ message: "You are not authenticated." });
//   }
//   next();
// }
require("express-group-routes");

//Instantiate Express
const express = require("express");
//Cors Policy
const cors = require("cors");
//Use express variable in app
const app = express();
//Define port to listen from server
const port = 5000;

//Cross origin policy
app.use(cors());

//Use body parser
app.use(express.json());

//Controllers


//Middleware
const { auth, authorized } = require("./middleware");

//Create get Response
app.get("/", (req, res) => {
  //Give response to client
  res.send("<h1>Hello Express</h1>");
});

app.group("/api/v1", router => {
  //GET all accounts
  router.get("/accounts", AccountController.index);

  //POST-LOGIN
  router.post("/login", AuthController.login);
});


//Server must to listen to port
app.listen(port, () => console.log(`Server is listening to Port: port`));
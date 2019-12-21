require("express-group-routes");

//Instantiate Express
const express = require("express");
//Cors Policy
const cors = require("cors");
//Use express variable in app
const app = express();
//Define port to listen from server
const port = 8000;

//Cross origin policy
app.use(cors());

//Use body parser
app.use(express.json());

//Controllers
const CategoriesController = require("./controllers/categories")
const ArticlesController = require("./controllers/articles");
const CommentsController = require("./controllers/comments")
const UsersController = require('./controllers/users')

// const AuthController = require("./controllers/auth");

// middleware belum berfungsi
// Middleware
// const { authenticated, authorized } = require("./middleware");

//Create get Response
app.get("/", (req, res) => {
  //Give response to client
  res.send("<h1>Hello Express</h1>");
});

app.group("/api/v1", router => {
  // //POST-LOGIN
  // router.post("/login", AuthController.login);

  // ------ CATEGORIES ------

  // GET all categories
  router.get("/categories", CategoriesController.index);
  // POST a categories
  router.post("/category", CategoriesController.create)
  // GET all articles of a category
  router.get("/category/:id/articles", CategoriesController.getArticleByCategories)


  // ------- ARTICLES ------

  // GET all articles
  router.get("/articles", ArticlesController.index)
  // GET all articles DESCENDING limit 10
  router.get("/articles-desc", ArticlesController.ascnd10)
  // POST new article 
  router.post('/article', ArticlesController.create)
  // PUT new article
  router.put('/article/:id', ArticlesController.update)
  // DELETE one article
  router.delete('/article/:id', ArticlesController.delete)
  // GET detail article
  router.get('/article/:id', ArticlesController.detailed)
  
  // ------ Comments ------
  
  // POST a comment 
  router.post('/article/:id/comment', CommentsController.new)
  // UPDATE comment
  router.put('/article/:id/comment', CommentsController.editcomment)
  // DELETE a comments
  router.delete('/article/:id/comment', CommentsController.deletecomment)

  //  ------ Users ------
  // router.post('/register', UsersController.new)
});
// fungi belum diketahoui
// app.use((err, req, res, next) => {
//   if (err.name === "UnauthorizedError") {
//     res.status(401).json({ message: "You are not authorized." });
//   } else {
//     next(err);
//   }
// });

//Server must to listen to port
app.listen(port, () => console.log(`Server is listening to Port: ${port}`));
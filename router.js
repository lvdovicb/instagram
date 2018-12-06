const express = require('express')
const app = express()
const UsersController = require('./controllers/UsersController')
const PostsController = require('./controllers/PostsController')
const AuthController = require('./controllers/AuthController')
var router = express.Router()

router.get("/users", UsersController.show)
router.post("/users", UsersController.createUser)
router.get("/users/:id", UsersController.getUserById)
router.patch("/users/:id", UsersController.update)
router.delete("/users/:id", UsersController.delete)

router.get("/posts", PostsController.show)
router.post("/posts", PostsController.create)
router.get("/posts/:id", PostsController.getPostById)
router.patch("/posts/:id", PostsController.update)
router.delete("/posts/:id", PostsController.delete)

router.post("/auth/login", AuthController.login)
router.post("/auth/logout", AuthController.logout)



module.exports = router;
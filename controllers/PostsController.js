var models = require('../models')
var bodyParser = require("body-parser");

class PostsController {
  static show(req, res) {
    models.Posts.findAll()
      .then(Posts => {
        res.status(200).send(Posts);
      }).catch((error) => {
        res.status(500).json({
          "message": "unable to get posts",
          "error": error
        })
      })
  }

  static create(req, res) {

    var title = req.body.title
    var comment = req.body.comment
    var picture = req.body.picture
    var userId = req.body.userId

    models.Post.create({
      title,
      comment,
      picture,
      userId
    }).then(post => {
      res.send(post)
    }).catch(function (err) {
      // print the error details
      console.log(err, req.body);
    })
  }

  static getPostById(req, res) {

    var id = req.params.id

    models.Posts.findById(id)
      .then(post => {
        res.send(post)
      })
      .catch(error => {
        res.status(500).json({
          "message": "can't get the post",
          error: error
        })
      })
  }

  static update(req, res) {
    let userId = req.body.userId
    let title = req.body.title
    let comment = req.body.comment
    let picture = req.body.picture

    let newValues = {
      userId,
      title,
      comment,
      picture
    }
    models.Posts.update(newValues, {
      where: {
        id: req.params.id
      }
    }).then(post => {
      res.sent(post)
    })
  }

  static delete(req, res) {
    // input
    const title = req.body.title;
    const comment = req.body.comment;
    const picture = req.body.picture;
    const UserId = req.token.userId;
    const id = req.params.id;

    // guard todo

    models.Posts.findByPk(id)
      .then(message => {
        posts.destroy()
          .then(() => {
            res.status(204).send();
          })
          .catch(error => {
            res.status(500).json({
              message: "unable to delete the message",
              error: error
            });
          })
      })
      .catch((error) => {
        res.status(404).json({
          message: "unable to find the message",
          error: error
        });
      })
  }
}

module.exports = PostsController
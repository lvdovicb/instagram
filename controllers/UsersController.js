var models = require('../models')
var bodyParser = require("body-parser");

class UsersController {
  static show(req, res) {
    models.Users.findAll()
    .then(Users => {
      res.send(Users);
    })
  }
  static createUser (req, res) {

    const name = req.body.name
    const email = req.body.email
    const password = req.body.password

    models.Users.create({
      name,
      email,
      password,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(user => {
        res.send(User)})

        .catch(function(err) {
          // print the error details
          console.log(err, req.body);
      });
  };
  
  static getUserById(req, res) {

    var id = req.params.id

    models.Users.findById(id)
    .then(user => {
      res.send(user)
    })
    .catch(error => {
      res.status(500).json({
        "message": "can't get the user", 
        error: error
      })
    })
  }
  static update (req, res) {
    this.getUserById()
   
  }
  static delete (req, res) {
    models.Users.remove({ id: req.params.userId }, (err, Users) => {
      if(err){
          res.send(err);
      }
      res.status(200).send('User deleted');
     });
    }
}

module.exports = UsersController
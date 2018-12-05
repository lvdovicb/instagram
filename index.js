const express = require('express')
const index = express()
var models = require('./models')
var User = models.Users

index.get('/', function (req, res) {
  User.findAll({
    attributes:{
      exclude:['password']
    },
    include:[models.Posts]
  }).then(function(users) {
    res.send(users) 
  });
})


index.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

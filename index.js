const express = require('express')
const app = express()
const http = require('http')
var models = require('./models')
const router = require('./router')
var User = models.Users
var bodyParser = require("body-parser");

app.get('/', function (req, res) {
  User.findAll({
    attributes:{
      exclude:['password']
    },
    include:[models.Posts]
  }).then(function(users) {
    res.send(users) 
  });
})
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/', router)


app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

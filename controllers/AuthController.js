var models = require('../models')
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

class AuthController {
  static login(req, res) {

    let email = req.body.email
    let password = req.body.password

    models.Users.findOne({
      where: {
        email: req.body.email,
      }
    })
      .then(function (userFound) {
        if (userFound) {
          bcrypt.compare(password, userFound.password, function (err, success) {
            if (success) {
                  const payload = { email: req.body.email }
                  const secret = `fsdqljmkqsfddjiojvcFKJP<QFQJFPOQDSMFMPUJQFSDIOUJFIMQFDSFQDZDUIOMQZFDSQ`
                  const expiresIn = 4 * 60 * 60 // 4h
                  const token = jwt.sign(payload, secret, { expiresIn: expiresIn })
                  let tok = console.log(jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplYW5kb3VnaDBAeW9wbWFpbC5jb20iLCJpYXQiOjE1NDQxMTEyNDYsImV4cCI6MTU0NDEyNTY0Nn0.q16NFWnPFysSCHkU74dSmQMZY7c1VrLCgJANMlrKHBs', `fsdqljmkqsfddjiojvcFKJP<QFQJFPOQDSMFMPUJQFSDIOUJFIMQFDSFQDZDUIOMQZFDSQ`))
                  return res.send(token)
            }
            else {
              res.send({ 'err': 'invalid password' });
            }
          })
        }
        else {
          res.send({ error: 'user not found' })
        }
      }).catch(function (err) {
        res.send({ 'error': err })
      });
  }

  static logout(req, res) {

  }
}


module.exports = AuthController
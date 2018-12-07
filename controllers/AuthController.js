var models = require('../models')
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')

class AuthController {
  static login(req, res) {

    let email = req.body.email
    let password = req.body.password
      // renvoyer une erreur si champs vides
    models.Users.findOne({
      where: {
        email: req.body.email,
      }
    })
      .then(function (userFound) {
        if (userFound) {
          bcrypt.compare(password, userFound.password, function (err, success) {
            if (success) {
                  const userID = userFound.id
                  const payload = { email: req.body.email, 'userID': userID, 'coucou': 'ee' }
                  const secret = `MIIBOwIBAAJBAM1t7sMDZ1fHYgmdlWJyAg+9pPzPUTOOa+HcUG2aVQRUSOWQ1P3P
                  F0K4nNlEwMHH7VXBYnZy6sFpsZ9Lenh7sUkCAwEAAQJBAJnxv/M0IcWODNHX3ZKg
                  jRruqy0oz1kraX0gdMUt2ngauW6f9h6YCgXP/v2kCxwW8cDASfQdHwrQP8YeeyI1
                  cOECIQDuZzN60IyY04iVpNBl1A6GusG/X2a0wtbbWJzxbn8TFwIhANyXq27I0AXD
                  lEBY1+P/b691P7eAGKm2xNKSwLXSZZqfAiEAj7qKT9XhndWSN93IgkupglKfsle6
                  3OnGjTFMVUYvuHsCIE+Cg5Is434QXrFK1JYjjdgKROsZSspxTEQyDS/8JA81AiAt
                  B3l3OjSFg/Dm7zMTkgfslp5ewrhFLONUZJKq31Osgw==`
                  const expiresIn = 4 * 60 * 60 // 4h
                  const token = jwt.sign(payload, secret, { expiresIn: expiresIn })
                  // let tok = console.log(jwt.verify('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImplYW5kb3VnaDBAeW9wbWFpbC5jb20iLCJpYXQiOjE1NDQxNzIxMDYsImV4cCI6MTU0NDE4NjUwNn0.YAJ_-5cnndMlD018RU8dxRaEBOkOc78cFah-R3BWKVg', `MIIBOwIBAAJBAM1t7sMDZ1fHYgmdlWJyAg+9pPzPUTOOa+HcUG2aVQRUSOWQ1P3P
                  // F0K4nNlEwMHH7VXBYnZy6sFpsZ9Lenh7sUkCAwEAAQJBAJnxv/M0IcWODNHX3ZKg
                  // jRruqy0oz1kraX0gdMUt2ngauW6f9h6YCgXP/v2kCxwW8cDASfQdHwrQP8YeeyI1
                  // cOECIQDuZzN60IyY04iVpNBl1A6GusG/X2a0wtbbWJzxbn8TFwIhANyXq27I0AXD
                  // lEBY1+P/b691P7eAGKm2xNKSwLXSZZqfAiEAj7qKT9XhndWSN93IgkupglKfsle6
                  // 3OnGjTFMVUYvuHsCIE+Cg5Is434QXrFK1JYjjdgKROsZSspxTEQyDS/8JA81AiAt
                  // B3l3OjSFg/Dm7zMTkgfslp5ewrhFLONUZJKq31Osgw==`))
                //  res.send(token)
                return res.cookie('access_token', token, {httpOnly: true, secure: false})
                 
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
  //   res.clearCookie('access_token')
  }
}


module.exports = AuthController
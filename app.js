const express = require('express');
const bodyParser = require('body-parser');
const sql = require('./app/models/db.js');
var cors = require('cors')
const path = require('path');
const session = require('express-session');
const config = require('./app/config/jwt.config');

const app = express();

var whitelist = ['http://localhost:4200', 'http://fraccionamiento.herokuapp.com']
var corsOptions = {
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    }
  }

app.use(cors(corsOptions))
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    res.send('cors problem fixed:)');

    res.json({ message: "bienvenido a fraccionamiento-app" });
});

require("./app/routes/user.routes.js")(app);

// set port, listen for requests
const port = process.env.port || 3000;
app.listen(port, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online')
});

const express = require('express'); //middleware
 const app = express(); //app through express 
 const mysql = require('mysql') //accessing Database
 var router = express.Router();

 const db = mysql.createPool({
    host: 'joystik.c6c22hwsu1b4.us-east-1.rds.amazonaws.com',
    port: '3306',
    user: 'admin', //default user
    password: 'password',
    database: 'JoyStik'
});

router.get('/', function (req, res, next) {

    // Connecting to the database.
    db.getConnection(function (err, connection) {

    // Executing the MySQL query (select all data from the 'users' table).
    db.query('SELECT * FROM JSusers', function (error, results, fields) {
      // If some error occurs, we throw an error.
      if (error) throw error;

      // Getting the 'response' from the database and sending it to our route. This is were the data is.
      res.send(results)
    });
  });
});

module.exports = router;
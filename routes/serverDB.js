/**
 * dependencies installed
 * 1. express (npm install express) (middleware server) 
 * 2. body-parser (npm install body-parser)
 * 3. mysql (npm install mysql)
 * 4. nodemon (npm install nodemon) (used so that we do not have to constantly rerun when making changes)
 */

/**
 * (npm run devStart)
 * if you look under package.json
 * running this command in terminal will automatically run (nodemon server.js)
 */
 /**const express = require('express'); //middleware
 const app = express(); //app through express 
 const mysql = require('mysql') //accessing Database
 
 
 /**
  * creating Database (calling database)
  */
 /**const db = mysql.createPool({
     host: 'joystik.c6c22hwsu1b4.us-east-1.rds.amazonaws.com',
     port: '3306',
     user: 'admin', //default user
     password: 'password',
     database: 'JoyStik'
 });
 
 
 // Creating a GET route that returns data from the 'users' table.
 app.get('/users', function (req, res) {
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
 
 /*
 //access the route (initial route) ("/")<-- accessing initial route.
 //if you want to reach another route ("/DesiredRoute") ("localhost:3001/DesiredRoute")
 //req (require) (trying to get information from the front end)
 //res (response) (response sending to the front end)
 app.get("/", (req, res) => {
 
     //making an SQL command insert statement
     const sqlInsert = "INSERT INTO JSusers VALUES (101, 'First', 'Last')"
     //quesry requires a string (the query) and a function
     db.query(sqlInsert, (error,result) => {
     //sends a message to front end to see if it worked
     res.send("it worked");
     })
 
 });
 */
 /**
  * can double check to see if it works by going to "localhost:3001" in browser
  */

/** 
 app.listen(3001, () => { //port number 3001
     console.log('running on port 3001'); //checks to see if server is running
     console.log('http://localhost:3001/users go here to check data')
 });
*/
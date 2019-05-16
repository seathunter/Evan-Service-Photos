var mysql = require('mysql');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
  if (err) {
    console.error('mysql connection error!');
    return;
  }
  console.log('mysql connected!');
});

// var getAllUsers = function (callback) {
//   connection.query(`SELECT * FROM users`, (error, results, fields) => {
//     if (error) throw error;
//     callback(results);
//   });
// };

// // As a user, when I enter my name and click "Get Balance," I 
// // expect to see my current balance 
// ////// TODO - and a list of other users, excluding myself.
// var getUserData = (callback, username) => {
//   connection.query(`SELECT balance FROM ${username}`, (error, results, fields) => {
//     if (error) throw error;
//     callback(results);
//   });
// }

const mysql = require('mysql');
const mysqlConfig = require('./config.js');
const connection = mysql.createConnection(mysqlConfig);

connection.connect(err => {
  if (err) {
    console.error('mysql connection error!');
    return;
  }
  console.log('mysql connected!');
});

var getAllPhotos = function (listing, callback) {
  if (listing > 80) {
    listing = 80;
  }
  let queryArgs = [listing, listing + 12];
  let queryStatement = `SELECT * FROM photos where id > ? AND id < ?`;
  connection.query(queryStatement, queryArgs, (error, results, fields) => {
    if (error) throw error;
    callback(results);
  });
};

var getAllInfo = function (callback) {
  connection.query(`SELECT * FROM info where id < 2`, (error, results, fields) => {
    if (error) throw error;
    callback(results);
  });
};

module.exports.getAllPhotos = getAllPhotos;
module.exports.getAllInfo = getAllInfo;
module.exports.connection = connection;
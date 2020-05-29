const { Client } = require('pg');
const credentials = require('./config');
const client = new Client(credentials);

client.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('connected to postgres');
  }
});

var getAllPhotos = function (listing, callback) {
  let queryArgs = [listing];
  let queryStatement = `SELECT * FROM photos where id = $1`;
  client.query(queryStatement, queryArgs, (error, results) => {
    if (error) throw error;
    callback(results);
  });
};

var getAllInfo = function (listing, callback) {
  const queryArgs = [listing];
  client.query(`SELECT * FROM info where id = $1`, queryArgs, (error, results) => {
    if (error) throw error;
    callback(results);
  });
};

module.exports.getAllPhotos = getAllPhotos;
module.exports.getAllInfo = getAllInfo;
module.exports.client = client;
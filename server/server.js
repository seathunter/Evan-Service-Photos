const express = require('express');
const port = 3050;
const db = require('../database');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors());
app.use('/:listingId', express.static(path.resolve(__dirname, '../client/public')));

app.get('/photos/:listingId', (req, res) => {
  let listing = Number(req.params.listingId.slice(1));
  if (listing > 80) {
    listing = 80;
  }
  const queryStatement = 'SELECT * FROM photos where id < ? AND id > ?';
  const queryArgs = [listing + 11, listing - 1];
  db.connection.query(queryStatement, queryArgs, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.get('/photos/sidebar/:listingId', (req, res) => {
  const listing = Number(req.params.listingId);
  const queryStatement = 'SELECT * FROM info where id = ?';
  const queryArgs = [listing];
  db.connection.query(queryStatement, queryArgs, (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

// app.get('/', (req, res) => {
//   res.status(200);
//   res.send();
// });

app.listen(port, () => console.log(`Listening on port ${port}!`));

module.exports.app = app;

// this is a version control test
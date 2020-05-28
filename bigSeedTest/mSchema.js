const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let restaurant = new Schema({
  name: String,
  photos: Array,
  timestamp: String,
  unrelated_report: Number,
  inappropriate_report: Number,
  dislike: Number,
});
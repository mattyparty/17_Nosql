const express = require('express');
const PORT = process.env.PORT || 8080;
const mongojs = require('mongojs');
// const logger = require('morgan');
const path = require('path');

const app = express();

// app.use(logger('dev'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

require('./routes/view.js');

app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log('Server listening on: http://localhost:' + PORT);
});

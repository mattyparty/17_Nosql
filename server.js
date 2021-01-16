const express = require('express');
const PORT = process.env.PORT || 8080;
const mongojs = require('mongojs');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

const routes = require('./routes/view');
app.use(routes);

app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log('Server listening on: http://localhost:' + PORT);
});

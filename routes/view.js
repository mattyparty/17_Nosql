// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require('path');

// Routes
// =============================================================
module.exports = function (app) {
  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route handler
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // excercise route handler
  app.get('/excercise', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/excercise.html'));
  });

  // stats route handler
  app.get('/stats', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/stats.html'));
  });
};

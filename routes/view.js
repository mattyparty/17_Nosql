// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
const express = require('express');
const router = express.Router();
var path = require('path');
// db connection for api routes
let mongoose = require('mongoose');
let db = require('../models/model');
require('dotenv').config();
mongoose.connect(
  'mongodb+srv://matthewpewewardy:matthewpewewardy@cluster0.faisl.mongodb.net/matthewpewewardy?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

// Routes
// =============================================================

// Each of the below routes just handles the HTML page that the user gets sent to.

// index route handler
router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// excercise route handler
router.get('/exercise', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/exercise.html'));
});

// stats route handler
router.get('/stats', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/stats.html'));
});

router.get('/api/workouts', (req, res) => {
  db.find({}, function (error, result) {
    res.send(result);
  });
});
module.exports = router;

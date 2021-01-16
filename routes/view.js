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
// for env
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
// api routes
router.get('/api/workouts', (req, res) => {
  db.find({}, function (error, result) {
    res.send(result);
  });
});

router.put('/api/workouts/:id', (req, res) => {
  //code here
});
// const res = await fetch("/api/workouts/" + id, {
//   method: "PUT",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(data)
// });
router.post('/api/workouts', (req, res) => {
  //code here
});
// async createWorkout(data = {}) {
//   const res = await fetch("/api/workouts", {
//     method: "POST",
//     body: JSON.stringify(data),
//     headers: { "Content-Type": "application/json" }
//   });
router.get('/api/workouts/range', (req, res) => {
  //code here
});
// async getWorkoutsInRange() {
//   const res = await fetch(`/api/workouts/range`);
//   const json = await res.json();

//   return json;
// },

module.exports = router;

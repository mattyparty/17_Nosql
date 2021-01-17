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
  `mongodb+srv://matthewpewewardy:${process.env.MONGOUSER}@cluster0.faisl.mongodb.net/${process.env.PASSWORD}?retryWrites=true&w=majority`,
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
  db.aggregate([
    { $addFields: { totalDuration: { $sum: '$exercises.duration' } } }
  ])
    .then((Workout) => {
      res.json(Workout);
      console.log(Workout);
    })
    .catch((err) => {
      res.json(err);
    });
});

// put route
router.put('/api/workouts/:id', ({ body, params }, res) => {
  console.log('this is the put');
  console.log(body);
  console.log(params);
  db.findByIdAndUpdate(
    params.id,
    {
      $push: {
        exercises: [
          {
            type: body.type,
            name: body.name,
            weight: body.weight,
            sets: body.sets,
            reps: body.reps,
            duration: body.duration,
            distance: body.distance
          }
        ]
      }
    }
    // { new: true, runValidators: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      console.log('err', err);
      res.json(err);
    });
});

router.post('/api/workouts', (req, res) => {
  console.log('this is the post');
  // console.log(req);
  db.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      console.log('err', err);
      res.json(err);
    });
});

router.get('/api/workouts/range', (req, res) => {
  db.find({}, function (error, result) {
    res.send(result);
  });
});

module.exports = router;

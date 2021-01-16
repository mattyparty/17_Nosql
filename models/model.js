const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({
  type: {
    type: String,
    trim: true
  },

  name: {
    type: String,
    trim: true
  },

  duration: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  reps: {
    type: Number,
    required: true
  },
  sets: {
    type: Number,
    required: true
  }
});

const Example = mongoose.model('Example', ExampleSchema);

module.exports = Example;

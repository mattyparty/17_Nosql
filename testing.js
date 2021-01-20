let mongoose = require('mongoose');
let db = require('./models/model');
require('dotenv').config();
console.log(process.env.MONGOUSER);
console.log(process.env.PASSWORD);

mongoose.connect(
  `mongodb+srv://matthewpewewardy:${process.env.MONGOUSER}@cluster0.faisl.mongodb.net/${process.env.PASSWORD}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

db.find({}, function (error, result) {
  console.log(result);
});


let mongoose = require('mongoose');
let db = require('./models/model');
require('dotenv').config();
console.log(process.env.MONGOUSER);
console.log(process.env.PASSWORD);

mongoose.connect(
  `mongodb+srv://matthewpewewardy:${process.env.MONGOUSER}@cluster0.faisl.mongodb.net/${process.env.PASSWORD}?retryWrites=true&w=majority`,
  {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

db.find({}, function (error, result) {
  console.log(result);
});

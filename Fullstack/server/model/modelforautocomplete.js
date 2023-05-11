const mongoose = require('mongoose');

const formSchema0 = new mongoose.Schema(
  {
    input1: {
      type: String,
      required: true,
    },
    input2: {
      type: String,
      required: true,
    },
    dateTime: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

const oneWay = mongoose.model('oneWay', formSchema0);
module.exports = oneWay;

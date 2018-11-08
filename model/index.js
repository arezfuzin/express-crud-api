const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  role: {
    type: String,
    default: 'user',
  },
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  phoneNumber: {
    type: Number,
    default: null,
    required: false,
  },
});

const Model = mongoose.model('models', schema);

module.exports = Model;

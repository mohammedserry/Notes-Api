const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
    maxLength: 40, 
  },
  description: {
    type: String,
    required: true,
    maxLength: 500,
  },
  color: {
    type: String,
    default: '#fff',
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Note', noteSchema);
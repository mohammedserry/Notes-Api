const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: 40,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: validator.isEmail,  
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
    validate : validator.isStrongPassword, 
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', userSchema);
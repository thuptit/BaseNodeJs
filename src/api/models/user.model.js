const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    maxlength: 128,
    index: true,
    trim: true,
  },
  mobile: {
    type: String,
    length: 10,
    index: true,
    trim: true,
  },
  address: {
    type: String,
    trim: true,
  },
}, {
  timestamps: true,
});
const userModule = mongoose.model('users', userSchema);

module.exports = userModule;

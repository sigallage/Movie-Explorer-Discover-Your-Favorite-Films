// backend/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  favorites: [
    {
      type: String, // Assuming movie IDs are strings (from TMDb)
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);

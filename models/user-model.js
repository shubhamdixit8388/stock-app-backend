const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    // required: true
    required: [true, 'Email is required to proceed'],
    unique: true,
    trim: true
  },
  // mobileNumber, isAdmin, isPremium, isOTPVerified
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  }
})

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const pushNotificationSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required']
  },
  message: {
    type: String,
    required: [true, 'message is required']
  },
  dateInString: {
    type: String,
    default: new Date().toLocaleString().toString()
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    select: false
  }
});

module.exports = mongoose.model('PushNotificationSchema', pushNotificationSchema);

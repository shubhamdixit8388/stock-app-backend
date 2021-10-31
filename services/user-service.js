const User = require('../models/user-model');

exports.getUsersIdWithExpoToken = async () => {
  const users = await User.find({notificationDisabled: false}, 'token');
  return users;
}

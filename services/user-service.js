const User = require('../models/user-model');

exports.getUsersIdWithExpoToken = async () => {
  const users = await User.find({}, 'token');
  return users;
}

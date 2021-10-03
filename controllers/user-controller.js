const emailService = require('../services/email-service');
const User = require('../models/user-model');
const _ = require('lodash');

exports.checkBody = (req, res, next) => {
  if (!req.body.email) {
    return res.status(400).send({
      status: 'fail',
      message: 'Email is required to proceed'
    });
  }
  next();
}

exports.generateOTP = (req, res) => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  emailService.sendEmail(req.body.email, 'Welcome to Stock App',
      'Your OTP is ' + otp, req, res, otp);
  //     .then(() => {
  //       console.log('Sucees mail');
  //   res.status(200).send({
  //     status: 200,
  //     message: 'OTP forwarded to Email'
  //   });
  // }).catch(() => {
  //   console.log('fail mail');
  //   res.status(500).send({
  //     status: '500',
  //     message: 'Failed to proceed'
  //   });
  // });
};

exports.validateOTP = (req, res) => {
// get email and otp -> get otp for respected email from db or throw wrong email error
// -> get encrypted otp from db and compare with otp in body -
  if (!(req.body.email && req.body.otp)) {
    return res.status(400).send({
      status: 'fail',
      message: 'OTP or email not provided'
    });
  }
  const user = new User(_.pick(req.body, ["name", "email", "password"]));
  console.log('User: ', user);
  res.status(200).send({
    status: 200,
    message: 'OTP Validated',
    data: user
  });
}

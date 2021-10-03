const emailService = require('../services/email-service')

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
  emailService.sendEmail(req.body.email, 'Subject - MBC logging text',
      'message - MBC logging text!', res);
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

exports.validateOTP = () => {
// get email and otp -> get otp for repected email from db or throw wrong email error
// -> get encrypted otp from db and compare with otp in body -
}

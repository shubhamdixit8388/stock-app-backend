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

}

const nodemailer = require('nodemailer');

exports.checkBody = (req, res, next) => {
  if (!req.body.email) {
    return res.status(400).send({
      status: 'fail',
      message: 'Email is required to proceed'
    });
  }
  next();
}

exports.login = (req, res) => {

  const transporter = nodemailer.createTransport({
    host: 'smtpout.secureserver.net',
    port: 465,
    service: "Gmail",
    auth: {
      user: 'shubham.dixit@techprimelab.com',
      pass: 'sdixit@8388'
    }
  });

  const mailOptions = {
    from: 'shubham.dixit@techprimelab.com',
    to: 'kiran.patil@techprimelab.com',
    subject: 'MBC logging text',
    text: 'MBC logging text!'
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('error: ', error);
      res.status(500).send({
        status: '500',
        message: 'Failed to proceed'
      });
    } else {
      res.status(200).send({
        status: 200,
        message: 'OTP forwarded to Email'
      });
    }
  });


};

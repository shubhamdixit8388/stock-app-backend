const nodemailer = require('nodemailer');

exports.sendEmail = (mailTo, subject, message, res) => {
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
    to: mailTo,
    subject: subject,
    text: message
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).send({
          status: '500',
          message: 'Failed to proceed'
        });
        // reject(error)
      } else {
        res.status(200).send({
          status: 200,
          message: 'OTP forwarded to Email'
        });
        // resolve()
      }
    }).then();
  })
}

const emailService = require("../services/email-service");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user-model");
const UtilityService = require("../services/utility-service");

exports.checkBody = (req, res, next) => {
  console.log(req.body);
  if (!req.body.email) {
    return res.status(400).send({
      status: "fail",
      message: "Email is required to proceed",
    });
  }
  next();
};

exports.generateOTP = (req, res) => {
  const otp = Math.floor(100000 + Math.random() * 900000);
  emailService.sendEmail(
    req.body.email,
    "Welcome to Stock App",
    "Your OTP is " + otp,
    req,
    res,
    otp
  );
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

exports.validateOTP = async (req, res) => {
  // get email and otp -> get otp for respected email from db or throw wrong email error
  // -> get encrypted otp from db and compare with otp in body -
  if (!(req.body.email && req.body.otp)) {
    return res.status(400).send({
      status: "fail",
      message: "OTP or email not provided",
    });
  }

  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user)
      return res
        .status(400)
        .send({ status: "fail", message: "Invalid OTP-1." });

    const isOTPValid = await bcrypt.compare(req.body.otp.toString(), user.otp);
    if (!isOTPValid)
      return res
        .status(400)
        .send({ status: "fail", message: "Invalid OTP-2." });

    const token = generateAuthToken(user);
    res.status(200).send({
      status: 200,
      message: "OTP Validated",
      token: token,
    });
  } catch (e) {
    console.log(e);
    return res
      .status(400)
      .send({ status: "fail", message: "Server Failed to validate OTP." });
  }
};

const generateAuthToken = (user) => {
  return jwt.sign({ _id: user._id, email: user.email }, "stock_jwtPrivateKey");
};

exports.saveDeviceToken = async (req, res) => {
  const { _id } = UtilityService.decodeToken(req);
  try {
    const user = await User.findByIdAndUpdate(_id, req.body, {
      new: true,
      runValidators: true,
    });
    res.status(200).send({
      status: "success",
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      status: "Fail",
      message: error,
    });
  }
};

exports.getUserDetails = async (req, res) => {
  const user = UtilityService.decodeToken(req);
  if (user !== null) {
    try {
      const userDetails = await User.findById(user._id);
      res.status(200).send({
        status: "success",
        data: userDetails,
      });
    } catch (e) {
      res.status(500).send({
        status: "Fail",
        message: "Server issue",
      });
    }
  } else {
    res.status(400).send({
      status: "Fail",
      message: "UnAuthenticated user",
    });
  }
};

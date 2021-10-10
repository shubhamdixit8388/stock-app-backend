const express = require("express");
const userController = require("../controllers/user-controller");
const Authenticate = require("../middlewares/auth");

const router = express.Router();

// router.param('id', toursController.checkTourId);

// router.route('/top-5-cheap').get(toursController.aliasTopTours, toursController.getAllTours)

/**
 * @swagger
 * /api/auth/generateOTP :
 *  post:
 *    consumes:
 *      - application/x-www-form-urlencoded
 *
 *    parameters:
 *      - in: formData
 *        name: email
 *        required: true
 *        schema:
 *          type:string
 *        description: email
 *
 *    description: Generate OTP for user
 *    responses:
 *      '200':
 *        description: OTP sent to your gmail
 */

router
  .route("/generateOTP")
  .post(userController.checkBody, userController.generateOTP);

/**
 * @swagger
 * /api/auth/validateOTP :
 *  post:
 *    consumes:
 *      - application/x-www-form-urlencoded
 *
 *    parameters:
 *      - in: formData
 *        name: email
 *        required: true
 *        schema:
 *          type:string
 *        description: email
 *
 *      - in: formData
 *        name: otp
 *        required: true
 *        schema:
 *          type:string
 *        description: otp
 *
 *    description: Validating OTP
 *    responses:
 *      '200':
 *        description: OTP validated uccessfully
 */

router.route("/validateOTP").post(userController.validateOTP);

module.exports = router;

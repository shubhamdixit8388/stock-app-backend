const express = require("express");
const bsesController = require("../controllers/bse-controller");
const Authenticate = require("../middlewares/auth");

const router = express.Router();
//
// /**
//  * @swagger
//  * /api/bse/gainers :
//  *  get:
//  *    consumes:
//  *      - application/x-www-form-urlencoded
//  *
//  *    description: Getting gainers for BSE
//  *    responses:
//  *      '200':
//  *        description: BSE gainers send successfully
//  */
//
// router.route("/gainers").get(bsesController.getGainers);

// router
//   .route("/gainers")
//   .post(Authenticate.authenticateUser, bsesController.getGainers);

module.exports = router;

const express = require("express");
const nseController = require("../controllers/nse-controller");
const Authenticate = require("../middlewares/auth");

const router = express.Router();

/**
 * @swagger
 * /api/nse/gainers :
 *  get:
 *    consumes:
 *      - application/x-www-form-urlencoded
 *
 *    description: Getting gainers for NSE
 *    responses:
 *      '200':
 *        description: NSE gainers send successfully
 */

router.route("/gainers").get(nseController.getGainers);

// router
//   .route("/gainers")
//   .post(Authenticate.authenticateUser, bsesController.getGainers);

module.exports = router;

const express = require("express");
const router = express.Router();
const notificationController = require('../controllers/notification-controller');

const Authenticate = require("../middlewares/auth");

/**
 * @swagger
 * /api/push-notification :
 *  post:
 *    consumes:
 *      - application/x-www-form-urlencoded
 *
 *    parameters:
 *      - in: formData
 *        name: title
 *        required: true
 *        schema:
 *          type:string
 *        description: Notification title
 *
 *      - in: formData
 *        name: message
 *        required: true
 *        schema:
 *          type:boolean
 *        description: Notification message
 *
 *    description: send puh notification to device
 *    responses:
 *      '200':
 *        description: Notification sent successfully
 */
router.route("/").post(notificationController.checkPuhNotificationBody,
    notificationController.sendPushNotification);

module.exports = router;

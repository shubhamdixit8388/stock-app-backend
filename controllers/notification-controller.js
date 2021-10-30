const pushNotificationService = require('../services/push-notification-service');

exports.checkPuhNotificationBody = (req, res, next) => {
  if(!(req.body.title && req.body.message)) {
    return res.status(400).send({
      status: "fail",
      message: "title and message are required for push notification",
    });
  }
  next();
}

exports.sendPushNotification = (req, res) => {
  pushNotificationService.sendPushNotificationToAll(req.body.title, req.body.message)
      .then(() => {
        res.status(200).send({
          status: 200,
          message: "Notification send successfully!"
        });
      })
      .catch(error => {
        res.status(200).send({
          status: 500,
          message: error.message
        });
      })
}

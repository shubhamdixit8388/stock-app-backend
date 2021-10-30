const pushNotificationService = require('../services/push-notification-service');
const PushNotificationModel = require('../models/push-notification-model');

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
        savePushNotification(req, res);
      })
      .catch(error => {
        res.status(200).send({
          status: 500,
          message: error.message
        });
      })
}

const savePushNotification = async (req, res) => {
  try {
    const notification = await PushNotificationModel.create(req.body);
    res.status(201).send({
      status: 'success',
      data: notification
    });
  } catch (error) {
    res.status(400).send({
      status: 'Fail',
      message: error.message
    });
  }
}

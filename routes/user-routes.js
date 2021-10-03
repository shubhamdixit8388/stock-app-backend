const express = require('express');
const userController = require('../controllers/user-controller')

const router = express.Router();

// router.param('id', toursController.checkTourId);

// router.route('/top-5-cheap').get(toursController.aliasTopTours, toursController.getAllTours)

router.route('/generateOTP')
    .post(userController.checkBody, userController.generateOTP);

router.route('/validateOTP').post(userController.validateOTP);

module.exports = router;

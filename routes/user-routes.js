const express = require('express');
const userController = require('../controllers/user-controller')

const router = express.Router();

// router.param('id', toursController.checkTourId);

// router.route('/top-5-cheap').get(toursController.aliasTopTours, toursController.getAllTours)

router.route('/login')
    .post(userController.checkBody, userController.login);

module.exports = router;

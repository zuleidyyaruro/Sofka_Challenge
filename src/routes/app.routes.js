
const express = require('express');
const router = express.Router();

// controller
const indexController = require('../controllers/index.controller');
const usersController = require('../controllers/users.controller');
const authController = require('../controllers/auth.controller');
const questionController = require('../controllers/question.controller');

// index
router.get('/', indexController.index);

// users - create account
router.get('/register', usersController.formRegister);
router.post('/register', usersController.register);

// users - login
router.get('/login', usersController.formLogin);
router.post('/login', authController.authUser);

// first level
router.get('/first-question', questionController.firstsQuestions);
router.get('/first-question/:username', usersController.pointsEarned1);

// second level
router.get('/second-question', questionController.secondsQuestions);
router.get('/second-question/:username', usersController.pointsEarned2);

// third level
router.get('/third-question', questionController.thirdsQuestions);
router.get('/third-question/:username', usersController.pointsEarned3);

// fourth level
router.get('/fourth-question', questionController.fourthsQuestions);
router.get('/fourth-question/:username', usersController.pointsEarned4);

// fifth level
router.get('/fifth-question', questionController.fifthsQuestions);
router.get('/fifth-question/:username', usersController.pointsEarned5);

// you lose
router.get('/youlose', questionController.youLose);

// withdraw
router.get('/withdraw', questionController.withdraw);

// winn
router.get('/youwin', questionController.youWin);

module.exports = router;
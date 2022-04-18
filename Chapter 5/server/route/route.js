//import express 
const express = require('express');

//import router
const router = express.Router();

//import controller
const constControllers = require('../controllers/controllers');

//import user
const user = require('../../db/user.json')



//api home
router.get('/', constControllers.home);
//api playGame
router.get('/playgame', constControllers.playGame);
//api show all users
router.get('/users', constControllers.showuser)
//dapat user dari id
router.get('/users/:id', constControllers.showUserid);

//memastikan udah login
router.post('/login', constControllers.loginUser);
//api login
router.get('/login', constControllers.loginIndex);
module.exports = router;
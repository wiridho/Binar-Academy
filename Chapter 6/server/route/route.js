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

// API DATABASE

//get dashboard 
router.get('/dashboard', constControllers.dashboard);
router.get('/dashboard/user', constControllers.dashboardUsers);
router.get('/dashboard/user/:id', constControllers.userBiodata);


router.get('/dashboard/create', constControllers.create_form);
router.post('/dashboard/create', constControllers.create_user);


// Update 
router.get('/dashboard/users/update/:id', dashboardController.update_form);
router.post('/dashboard/users/update/:id', dashboardController.update_user);



//memastikan udah login
router.post('/login', constControllers.loginUser);
//api login
router.get('/login', constControllers.loginIndex);



module.exports = router;
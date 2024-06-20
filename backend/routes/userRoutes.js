const express = require('express');
const userController = require('../controller/userController');

const router = express.Router();


router.post('/signup', userController.createUser);
router.get('/', userController.getAllUsers);
router.get('/login', userController.loginUser);
router.get('/:id', userController.getUserBlogs);

exports.router = router;  
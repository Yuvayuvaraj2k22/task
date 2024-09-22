const express = require('express');
const router = express.Router();
const userController = require('../controller/usercontroller');

router.get('/get', userController.getAllUsers);

router.post('/post', userController.createUser);

router.get('/:id', userController.getUserById);

router.put('/:id', userController.updateUserById);

router.delete('/:id', userController.deleteUserById);

module.exports = router;

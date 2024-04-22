const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/', userController.getAllUsers);
router.post('/new', userController.createUser); 
router.put('/:id', userController.updateUser); 
router.delete('/:id', userController.deleteUser); 
router.get('/:id', userController.getSingleUser);
router.post('/login', userController.login);


module.exports = router;
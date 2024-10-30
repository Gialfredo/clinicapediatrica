// loginRoutes.js

const express = require('express');
const { registerUser, loginUser } = require('../controllers/loginController');
const router = express.Router();

// Ruta para registrar un nuevo usuario
router.post('/register', registerUser); 

// Ruta para login de usuario
router.post('/login', loginUser);

module.exports = router;
    

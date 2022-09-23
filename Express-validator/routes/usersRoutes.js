const express = require('express');
const router = express.Router();
const { check } = require('express-validator');
const { createUser } = require('../controller/usersControllers');
const verifyEmail = require('../helpers/verifyEmail');
const handleErrors = require('../middleware/handleErrors');

router.post('/new', [
   check('name', 'El nombre es requerido').not().isEmpty(),
   check('password', 'La contraseña es requerida y debe tener 6 caracteres').isLength({ min: 6 }),
   check('email', 'Ingrese un email valido').isEmail(),
   check('email').custom(verifyEmail),
   handleErrors
], createUser);

module.exports = router;
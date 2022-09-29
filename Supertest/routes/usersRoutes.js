const express = require('express');
const { check } = require('express-validator');
const { createUser, getUsers, getUser, login, deleteUser } = require('../controllers/usersControllers');
const verifyJWT = require('../middleware/verifyJWT');
const isAdmin = require('../middleware/isAdmin');
const handleErrors = require('../middleware/handleErrors');


const router = express.Router();


router.get('/', [verifyJWT, isAdmin], getUsers);

router.post('/new', [
   check('name', 'El nombre es obligatorio').not().isEmpty(),
   check('email', 'Ingrese un email válido').isEmail(),
   check('password', 'La contraseña debe tener como minimo 6 caracteres').isLength({ min: 6 }),
   handleErrors
], createUser);

router.post('/login', [
   check('email', 'Ingrese un email válido').isEmail(),
   check('password', 'La contraseña es obligatorio').not().isEmpty(),
   handleErrors
], login);

router.get('/:id', getUser);

router.delete('/:id', [verifyJWT, isAdmin], deleteUser);

module.exports = router;
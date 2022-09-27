const express = require('express');
const { login, main } = require('../controllers/usersControllers');

const router = express.Router();


router.get('/', main);

router.post('/login', login);


module.exports = router;
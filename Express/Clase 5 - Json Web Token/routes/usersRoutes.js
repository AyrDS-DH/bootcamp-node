const express = require('express');
const { login, main } = require('../controllers/usersControllers');

const router = express.Router();

console.log(process.env.TEST_VARIABLE + "desde routes");

router.get('/', main);

router.post('/login', login);


module.exports = router;
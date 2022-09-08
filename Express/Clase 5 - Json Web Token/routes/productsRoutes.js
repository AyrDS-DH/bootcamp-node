const express = require('express');
const { deleteProduct } = require('../controllers/productsControllers');
const verifyJWT = require('../middleware/verifyJWT');
const router = express.Router();


router.delete('/delete', verifyJWT, deleteProduct)

module.exports = router;
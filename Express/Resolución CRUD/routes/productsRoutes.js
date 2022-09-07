const express = require('express');
const { productsList, productById, createProduct, editProduct, deleteProduct } = require('../controllers/productsController');


const router = express.Router();

router.get('/', productsList);

router.get('/:id', productById);

router.post('/create', createProduct);

router.put('/edit/:idProduct', editProduct);

router.delete('/delete/:id', deleteProduct);

module.exports = router;
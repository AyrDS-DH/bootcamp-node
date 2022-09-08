const express = require('express');
const { productsList, productById, createProduct, editProduct, deleteProduct, testQuerys } = require('../controllers/productsController');
const validateName = require('../middlewares/validateName');
const validatePrice = require('../middlewares/validatePrice');
const test = require('../middlewares/test');

const router = express.Router();

router.use(test);

router.get('/', productsList);

router.post('/create', [validatePrice, validateName], createProduct);

router.put('/edit/:idProduct', editProduct);

router.delete('/delete/:id', deleteProduct);

router.get('/test', testQuerys)

router.get('/:id', productById);

module.exports = router;
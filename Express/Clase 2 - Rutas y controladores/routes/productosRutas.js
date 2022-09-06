const express = require('express');
const route = express.Router();
const productosControladores = require('../controllers/productosControladores');
/* const { Router } = require('express');
const router = Router(); */

route.get('/', productosControladores.listarProductos);

route.get('/:id', productosControladores.mostrarProductoPorId);


module.exports = route;
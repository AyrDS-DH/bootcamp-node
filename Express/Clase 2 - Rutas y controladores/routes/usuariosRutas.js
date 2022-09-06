const express = require('express');
const route = express.Router();
const { buscarUsuario, perfilUsuario } = require('../controllers/usuariosControlador');

/* route.get('/', (req, res) => {
   // const { id } = req.params;
   res.send('<h1>Usuarios</h1>');
}); */

route.get('/:id?', buscarUsuario);
route.get('/detalle/:usuario', perfilUsuario);

module.exports = route;
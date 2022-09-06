const express = require('express');
const app = express();
const rutasProductos = require('./routes/productosRutas');
const mainRutas = require('./routes/mainRutas');
const usuariosRutas = require('./routes/usuariosRutas');

//Rutas productos
// app.use('/productos', require('./routes/productosRutas'));
app.use('/productos', rutasProductos);


//Rutas usuarios
app.use('/usuarios', usuariosRutas);

//Rutas main
app.use('/', mainRutas);

app.listen(8080, () => {
   console.log('Server lentando');
});
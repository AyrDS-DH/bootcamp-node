require('dotenv').config();
const express = require('express');
const usersRoutes = require('./routes/usersRoutes');
const productsRoutes = require('./routes/productsRoutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
   res.json({
      ok: true,
      msg: 'Inicio'
   })
});

app.use('/users', usersRoutes);
app.use('/products', productsRoutes);

app.listen(3000, () => {
   console.log('Servidor corriendo en el puerto 3000');
});


module.exports = app;
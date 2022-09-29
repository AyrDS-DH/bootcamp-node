require('dotenv').config();
const express = require('express');
const usersRoutes = require('./routes/usersRoutes');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
   res.json({
      ok: true,
      msg: 'Inicio'
   })
});

app.use('/users', usersRoutes);


const server = app.listen(process.env.PORT, () => {
   console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
});

module.exports = { app, server };
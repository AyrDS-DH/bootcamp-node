const express = require('express');
const productsRoutes = require('./routes/productsRoutes');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
   res.send('<h1>Inicio</h1>');
});

app.use('/products', productsRoutes);



app.listen(8080, () => {
   console.log('Server levantado');
})
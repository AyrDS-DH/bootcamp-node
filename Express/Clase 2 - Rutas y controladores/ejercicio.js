const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
   res.send('<h1>Inicio</h1>');
});

app.get('/productos', (req, res) => {
   res.send('<h1>Productos</h1>');
});

app.get('/contacto', (req, res) => {
   res.send('<h1>Contacto</h1>');
});

app.get('/404notFound', (req, res) => {
   res.send('<h1>404 no encontrado</h1>')
});

app.get('*', (req, res) => {
   res.redirect('/404notFound');
});

app.listen(PORT, () => {
   console.log(`Servidor levantado en puerto ${PORT}`);
});
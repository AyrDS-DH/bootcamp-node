const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: true })) //Esto es en el caso de trabajar con formularios
app.use(express.json()); //Este metodo debe estar en el archivo index/app para que se apliquen a todas las rutas

app.get('/', (req, res) => {
   res.send('get')
});


app.put('/', (req, res) => {
   const body = req.body;

   console.log(body);

   res.send('put')
});

app.delete('/', (req, res) => {
   res.send('Delete')
});

app.post('/', (req, res) => {
   res.send('post')
});

app.listen(8080, () => {
   console.log('Server levantado');
});

const express = require('express');
const app = express();

const users = [
   {
      id: 1,
      name: 'Ayrton',
      apellido: 'Da Silva'
   },
   {
      id: 2,
      name: 'Ignacio',
      apellido: 'Feito'
   },
   {
      id: 3,
      name: 'Rodrigo',
      apellido: 'Lauga'
   },
];

app.get('/', (req, res) => {
   // res.send('<h1>Bienvenidos!</h1>'); //Lo pasa a formato string

   res.sendFile(__dirname + '/public/index.html')
});


//Ruta parametrizada obligatoria
app.get('/productos/:id', (req, res) => {
   // const id = req.params.id; //Es lo mismo que la linea siguiente
   const { id } = req.params;

   res.send(id);
});

//Ruta parametrizada opcionales
app.get('/usuarios/:id?', (req, res) => {
   // const { id } = req.params;
   const id = Number(req.params.id);

   if (!id) {
      return res.send(users);
   }

   const usuario = users.filter(el => el.id === id);

   return res.send(usuario);
});

//Entra a esta ruta si el usuario pone un url que no existe
app.get('*', (req, res) => {
   res.send('Error 404, not found');
});

app.listen(8080, () => {
   console.log('Server lentando');
});
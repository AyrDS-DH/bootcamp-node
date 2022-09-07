const express = require('express')
const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json());


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

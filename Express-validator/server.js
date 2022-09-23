const express = require('express');
const app = express();

app.use(express.json());

app.use('/users', require('./routes/usersRoutes'));


app.listen(8080, () => {
   console.log('Server levantado en puerto 8080');
})
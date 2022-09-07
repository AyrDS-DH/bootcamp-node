const fs = require('fs');

const actualizar = (dato) => {

   try {
      const archivo = fs.readFileSync('db.txt', 'utf-8');
      const datos = JSON.parse(archivo);

      datos.push(dato);

      fs.writeFileSync('db.txt', JSON.stringify(datos));
   } catch (error) {
      console.log(error);
   }

}

// actualizar(5);
// actualizar(6);
actualizar(7);
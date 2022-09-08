const fs = require('fs');

const productsList = (req, res) => {

   try {
      const dataToParse = fs.readFileSync('db.json', 'utf-8');
      const data = JSON.parse(dataToParse);

      res.status(500).json(data);
   } catch (error) {
      console.log(error);
      res.status(500).json({
         msg: 'Error interno'
      });
   }
}

const productById = (req, res) => {
   const { id } = req.params;

   try {
      const dataToParse = fs.readFileSync('db.json', 'utf-8');
      const data = JSON.parse(dataToParse);

      const dataToShow = data.find(elm => elm.id === Number(id));

      if (!dataToShow) {
         return res.send('Este producto no existe');
      }

      res.send(dataToShow);
   } catch (error) {
      console.log(error);
   }
}

const createProduct = (req, res) => {
   const { nombre, precio, id } = req.body;
   console.log(req.test);
   /* if (!nombre || !precio || !id) {
      return res.send('Para crear el producto se necesitan nombre, precio e id');
   } */

   const nuevoProducto = {
      id,
      nombre,
      precio
   }

   try {
      const dataToParse = fs.readFileSync('db.json', 'utf-8');
      const data = JSON.parse(dataToParse);

      data.push(nuevoProducto);

      fs.writeFileSync('db.json', JSON.stringify(data));
      res.send(nuevoProducto);
   } catch (error) {
      console.log(error);
      res.send('Error inesperado');
   }
}

const editProduct = (req, res) => {
   const { id, ...restoDeElementos } = req.body;
   const { idProduct } = req.params;

   console.log(restoDeElementos);

   try {
      const dataToParse = fs.readFileSync('db.json', 'utf-8');
      const data = JSON.parse(dataToParse);

      const dataUpdate = data.map(product => {
         if (product.id === Number(idProduct)) {
            const newEl = { ...product, ...restoDeElementos };
            return newEl;
         } else {
            return product;
         }
      });
      fs.writeFileSync('db.json', JSON.stringify(dataUpdate));
      res.send(dataUpdate);

   } catch (error) {
      console.log(error);
      res.send('Error inesperado');
   }
}

const deleteProduct = (req, res) => {
   const { id } = req.params;

   try {
      const dataToParse = fs.readFileSync('db.json', 'utf-8');
      const data = JSON.parse(dataToParse);

      const newData = data.filter(el => el.id !== Number(id));
      fs.writeFileSync('db.json', JSON.stringify(newData));
      res.send('Archivo eliminado con exito');

   } catch (error) {
      console.log(error);
      res.send('Error inesperado');
   }
}

const testQuerys = (req, res) => {
   const { nombre, apellido = 'Da Silva' } = req.query; //Apellido le asignamos un valor por defecto si el cliente no manda ningun valor


   res.json({
      nombre,
      apellido
   })
}

module.exports = {
   createProduct,
   productById,
   productsList,
   editProduct,
   deleteProduct,
   testQuerys
}
const productosControladores = {
   listarProductos: (req, res) => {
      res.send('Lista Productos');
   },

   mostrarProductoPorId: (req, res) => {
      // const id = req.params.id; //Es lo mismo que la linea siguiente
      const { id } = req.params;

      res.send(id);
   }
}

module.exports = productosControladores;
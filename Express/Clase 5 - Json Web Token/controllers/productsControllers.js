
const deleteProduct = (req, res) => {

   const author = req.name;

   res.json({
      ok: true,
      msg: 'Producto eliminado',
      productoEliminadoPor: author
   })
}

module.exports = {
   deleteProduct
}
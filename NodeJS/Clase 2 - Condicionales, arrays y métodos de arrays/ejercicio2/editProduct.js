function editProduct(arr, product, change) {
  /**
   * Del array indicado, buscar el producto del segundo argumento por su "name" y realizar el cambio solicitado.
   * El parámetro "change" es un objeto que contiene una propiedad existente en el producto,
   * y su nuevo valor. Ejemplo: { price: 500 }
   */
  for (i = 0; i < arr.length; i++) {
    if (arr[i].name === product) {
      if (change.price) {
        arr[i].price = change.price;
      }
      if (change.discount !== undefined) {
        arr[i].discount = change.discount;
      }
    }
  }
  console.table(arr);
}

module.exports = editProduct;

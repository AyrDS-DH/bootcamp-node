function addProduct(arr, product) {
  /**
   * Recibimos un objeto y lo agregamos al array. Si ya existe en el array,
   * aumentar su propiedad 'stock' en función del stock del producto que recibimos.
   */
  let aux = [];

  for (i = 0; i < arr.length; i++) {
    aux.push(arr[i].name);
  }

  if (aux.includes(product.name)) {
    for (i = 0; i < arr.length; i++) {
      if (arr[i].name === product.name) {
        arr[i].stock += product.stock;
      }
    }
  } else {
    arr.push(product);
  }

  console.table(arr);
}

module.exports = addProduct;

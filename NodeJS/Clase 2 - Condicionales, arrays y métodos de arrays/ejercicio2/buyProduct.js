function buyProduct(arr, productName, qty) {
  /**
   * Recibimos el nombre del producto y restamos de su stock el stock recibido en el parámetro "qty".
   * Si el stock en db llega a cero, el producto debe ser removido y agregado al array "sinStock".
   */
  for (i = 0; i < arr.length; i++) {
    if (arr[i].name === productName) {
      if (arr[i].stock < qty) {
        console.log(
          "\x1b[33m%s\x1b[0m",
          `
  ***************************************************************************************
  *
  * No hay suficiente stock para esta compra. El stock de ${productName} es de ${arr[i].stock}
  *
  ***************************************************************************************
  `
        );
      } else {
        arr[i].stock -= qty;
        if (arr[i].stock === 0) {
          arr.splice(i, 1);
          console.log(
            "\x1b[33m%s\x1b[0m",
            `
  **********************************************************
  *
  * Compra realizada. El producto ${productName} se quedó sin stock.
  *
  **********************************************************
  `
          );
        } else {
          console.log(
            "\x1b[32m%s\x1b[0m",
            `
  **********************************************************
  * 
  * Compra realizada. El stock de ${productName} ahora es ${arr[i].stock}
  *
  **********************************************************
  `
          );
        }
      }
      return;
    }

    if (i === arr.length - 1) {
      console.log(
        "\x1b[31m%s\x1b[0m",
        `
  **********************************************************
  * 
  * El producto ${productName} no existe en la base de datos.
  *
  **********************************************************
  `
      );
    }
  }
}

module.exports = buyProduct;

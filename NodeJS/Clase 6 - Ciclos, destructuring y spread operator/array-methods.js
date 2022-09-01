const cart = {
  id: "1452asfas23851qA23afs25",
  products: [
    { id: 0, nombre: "Monitor", precio: 100 },
    { id: 1, nombre: "Silla", precio: 80 },
    { id: 2, nombre: "Escritorio", precio: 80 },
  ],
};

/**
 * Map
 */

const metodoPago = (metodo, carrito) => {
  let newCart;
  switch (metodo) {
    case "debito":
      newCart = carrito.map((el) => {
        el.precio += el.precio * 0.05;
        return el;
      });

      break;
    case "credito":
      newCart = carrito.map((el) => (el.precio += el.precio * 0.1));
      break;
  }

  return newCart;
};

console.log(metodoPago("debito", cart.products));

/**
 * Reduce
 */

const calcularTotal = (arr) => {
  return `El total del carrito es de $${arr.reduce(
    (acum, cur) => acum + cur.precio,
    0
  )}`;
};

console.log(calcularTotal(cart.products));

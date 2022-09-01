/**
 * Destructuring
 */

const colors = ["Rojo", "Azul", "Amarillo"];

const [, azul] = colors;

console.log(azul);

const product = { id: 0, name: "Cuchara", price: 5 };

let { name: prodName, price } = product;

console.log(prodName);
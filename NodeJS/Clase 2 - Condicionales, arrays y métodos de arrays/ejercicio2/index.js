/**
 *
 * En este ejercicio tenemos una base de datos que consta de un array, almacenado en la const "products".
 * Necesitamos administrar esta base de datos con algunas funciones que aún no desarrollamos.
 *
 */

const editProduct = require("./editProduct");
const buyProduct = require("./buyProduct");
const addProduct = require("./addProduct");

const products = [
  { name: "Monitor", price: 450, discount: false, stock: 10 },
  { name: "Teclado", price: 125, discount: true, stock: 20 },
  { name: "Parlantes", price: 530, discount: true, stock: 10 },
  { name: "Mouse", price: 100, discount: true, stock: 5 },
  { name: "Procesador", price: 700, discount: false, stock: 8 },
  { name: "Placa de video", price: 1100, discount: true, stock: 9 },
];

editProduct(products, "Parlantes", { price: 525 });

addProduct(products, {
  name: "Procesador",
  price: 700,
  discount: false,
  stock: 2,
});
addProduct(products, { name: "Silla", price: 120, discount: false, stock: 10 });

buyProduct(products, "Mouse", 200);
buyProduct(products, "Mouse", 1);
buyProduct(products, "Mouse", 1);
buyProduct(products, "Mouse", 1);
buyProduct(products, "Mouse", 1);
buyProduct(products, "Mouse", 1);
buyProduct(products, "Mouse", 1);

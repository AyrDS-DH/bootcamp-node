/**
 *
 * En este ejercicio tenemos una base de datos que consta de un array, almacenado en la const "products".
 * Necesitamos administrar esta base de datos con algunas funciones que aún no desarrollamos.
 *
 */

const products = [
  { name: "Monitor", price: 450, discount: false, stock: 10 },
  { name: "Teclado", price: 125, discount: true, stock: 20 },
  { name: "Parlantes", price: 530, discount: true, stock: 10 },
  { name: "Mouse", price: 100, discount: true, stock: 5 },
  { name: "Procesador", price: 700, discount: false, stock: 8 },
  { name: "Placa de video", price: 1100, discount: true, stock: 9 },
];

function buyProduct(arr, productName, qty) {
  /**
   * Recibimos el nombre del producto y restamos de su stock el stock recibido en el parámetro "qty".
   */
}

function editProduct(arr, product, change) {
  /**
   * Del array indicado, buscar el producto del segundo argumento por su "name" y realizar el cambio solicitado.
   * El parámetro "change" es un objeto que contiene una propiedad existente en el producto,
   * y su nuevo valor. Ejemplo: { price: 500 }
   */
}

function addProduct(arr, product) {
  /**
   * Recibimos un objeto y lo agregamos al array. Si ya existe en el array,
   * aumentar su propiedad 'stock' en función del stock del producto que recibimos.
   */
}

editProduct(products, "Parlantes", { price: 525 });

addProduct(products, { name: "Procesador", price: 700, discount: false, stock: 2 });
addProduct(products, { name: "Silla", price: 120, discount: false, stock: 10 });

buyProduct(products, "Mouse", 200);
buyProduct(products, "Mouse", 1);
buyProduct(products, "Mouse", 1);
buyProduct(products, "Mouse", 1);
buyProduct(products, "Mouse", 1);
buyProduct(products, "Mouse", 1);
buyProduct(products, "Mouse", 1);

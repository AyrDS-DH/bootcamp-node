let db = {
  products: [
    { id: 0, nombre: "Monitor", precio: 100 },
    { id: 1, nombre: "Silla", precio: 80 },
    { id: 2, nombre: "Escritorio", precio: 80 },
  ],
};

/**
 * Spread operator
 */

const addProduct = (prod) => {
  prod.id = db.products[db.products.length - 1].id + 1;
  db.products = [...db.products, prod];
};

addProduct({ nombre: "Parlantes", precio: 75 });

//console.log(db);

/**
 * Rest operator
 */

function addMultipleProducts(...prods) {
  prods.forEach((producto) => addProduct(producto));
}

addMultipleProducts(
  { nombre: "Parlantes", precio: 75 },
  { nombre: "Parlantes", precio: 75 }
);

console.log(db);

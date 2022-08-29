const cart1 = [
  { name: "Monitor", price: 450, discount: false, amount: 2 },
  { name: "Teclado", price: 125, discount: true, amount: 2 },
  { name: "Parlantes", price: 530, discount: true, amount: 2 },
  { name: "Mouse", price: 100, discount: true, amount: 3 },
  { name: "Procesador", price: 700, discount: false, amount: 1 },
  { name: "Placa de video", price: 1100, discount: true, amount: 1 },
];

const cart2 = [
  { name: "Monitor", price: 450, discount: false, amount: 1 },
  { name: "Teclado", price: 125, discount: false, amount: 1 },
  { name: "Parlantes", price: 530, discount: false, amount: 1 },
  { name: "Mouse", price: 100, discount: true, amount: 1 },
  { name: "Procesador", price: 700, discount: false, amount: 1 },
];

const cart3 = [
  { name: "Monitor", price: 450, discount: false, amount: 1 },
  { name: "Teclado", price: 125, discount: false, amount: 1 },
  { name: "Procesador", price: 700, discount: false, amount: 1 },
];

function sendProducts(arr, distance) {
  // Si el costo del envío es superior a 2000, hacer un 5% de descuento sobre el total
  // Si el producto tiene un código promocional, hacer un 5% de descuento sobre su precio, no sobre el total
  // Si el envío supera los 5km, aumentar un 2%
  // Si el envío supera los 100km, aumentar un 10%
}

sendProducts(cart1, 3.4);
sendProducts(cart2, 5.2);
sendProducts(cart3, 112);

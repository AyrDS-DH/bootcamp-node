// Arrow functions
const suma = (a, b) => {
  console.log("Estoy sumando");
  return a + b;
};

console.log(suma(1, 1));

const arr = [1, 2, 3];

arr.forEach((el, i) => {
  console.log(i);
});

// Callbacks

const saludar = () => console.log("Hola!");

setTimeout(saludar, 2000);
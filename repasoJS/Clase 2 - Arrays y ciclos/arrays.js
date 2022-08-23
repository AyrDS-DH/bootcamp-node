const array = ["Lunes", "Martes", "Miércoles"];

// array.length
console.log(array.length);


// array.push()
array.push("Jueves", "Viernes", "Sábado", "Domingo");

console.log(array);


// array.pop()
let eliminado = array.pop();

console.log(array);
console.log(eliminado);


// array.indexOf()
let index = array.indexOf("Domingo");

if (array === -1) {
  console.log("No existe dentro del array");
}
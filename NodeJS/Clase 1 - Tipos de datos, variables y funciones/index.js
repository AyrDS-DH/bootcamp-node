// Valores por defecto en parámetros
function saludar(a = "nombre", b = "apellido") {
  console.log("Hola " + a + " " + b);
}

saludar();

// typeof
function saludar2(a, b) {
  if (typeof a === "string" && typeof b === "string") {
    console.log("Hola " + a + " " + b);
  } else if (typeof a !== "string") {
    console.log("a debe ser igual a un nombre");
  } else if (typeof b !== "string") {
    console.log("b debe ser igual al apellido");
  }
}

saludar2("Ayrton", 2);

// Trabajando con objetos
let obj1 = { name: "Juan", age: 25 };
console.log("El nombre es " + obj1.name, " y la edad es " + obj1.age);

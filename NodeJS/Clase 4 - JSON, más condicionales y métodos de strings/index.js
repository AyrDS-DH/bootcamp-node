/**
 * JSON - JavaScript Object Notation
 */

const db =
  '{"products": {"id": 1, "name": "Monitor 24", "price": 250, "color": "Black"}, "users": {"id": 1, "name": "Roque", "surname": "Fort"}}';

const newDb = {
  productos: { id: 0, name: "Silla", price: 50, color: "White" },
  usuarios: { id: 0, name: "Cosme", surname: "Fulanito" },
};

console.log(JSON.parse(db));

console.log(JSON.stringify(newDb, ["productos", "id", "name", "price"], 10));

/**
 * Objetos
 */

function Animal(especie, accion) {
  this.especie = especie;
  this.accion = accion;
}

const perro = new Animal("perro", function () {
  console.log(`Hola, soy un ${this.especie}`);
});

perro.accion();

class Persona {
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}

const Juan = new Persona("Juan", "P");

console.log(Juan.saludar());

/**
 * If ternario y Switch
 */

let val = true;

switch (val) {
  case true:
    val = !val;
    break;
  case false:
    val = !val;
  case true:
    console.log("Es verdadero");
}

console.log(val);

//Var - Se recomienda no utilizarlo más ❌
var nombre = 'Ayrton';
console.log(nombre);
nombre = 'Nacho';
console.log(nombre);


//Let - Permite reasignar
let apellido = 'Da Silva';
console.log(apellido);
apellido = 'Balmaceda';
console.log(apellido);

//Const - No se puede reasignar
const edad = 24;
const persona = { nombre: 'Ayrton', edad: 24 };

persona.edad = 25; //En este caso estamos mutando el objeto, pero no estamos reasignando la variable
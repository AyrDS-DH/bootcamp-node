// Iterar arrays con bucle for

const diasDeLaSemana = ["Lunes", "Martes", "Miércoles"];

// array.push()
diasDeLaSemana.push("Jueves", "Viernes", "Sábado", "Domingo");

console.log(diasDeLaSemana);

// Recorremos el array
for (let i = 0; i < diasDeLaSemana.length; i++) {
  console.log(diasDeLaSemana[i]);
}

// Recorremos el array de atrás hacia adelante
for (let i = diasDeLaSemana.length - 1; i >= 0; i--) {
  console.log(diasDeLaSemana[i]);
}
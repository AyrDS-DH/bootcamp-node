
//Funcion expresada
const sumar = function (a, b) {
   return a + b;
}

//Funcion declarada
function restar(a, b) {
   return a - b;
}


//arrow funcition -- funcion flecha
const multiplicar = (a, b) => {
   const numeroSumado = sumar(a, b);
   return numeroSumado * b;
}

console.log(multiplicar(5, 2));

//Tanto la funcion expresada y la función flecha no pueden invocarse antes de definirse.

const funciones = {
   dividir(a, b) {
      return a / b;
   }
}

funciones.dividir(10, 2); //En este caso ya es un método
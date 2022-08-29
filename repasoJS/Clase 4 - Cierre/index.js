let productos = [
  ["Cafe", "800"],
  ["Yerba", "350"],
  ["Platos", "250"],
  ["Alfajor", "150"],
  ["Tazas", "425"],
  ["Pelota futbol", "1500"],
  ["Chocolate", "125"],
  ["Té", "225"],
  ["Mani", "160"],
  ["Leche", "220"],
  ["Galletitas", "200"],
  ["Tostadas", "370"],
  ["Azucar", "215"],
  ["Cuchillo", "175"],
  ["Tenedor", "175"],
  ["Papel Higienico", "260"],
];

function consultas(str) {
  if (str === "listado") {
    return productos;
  }

  if (str === "mayorprecio") {
    let array = [productos[0]];

    for (i = 0; i < productos.length; i++) {
      if (parseInt(productos[i][1]) > parseInt(array[0][1])) {
        array = [productos[i]];
      }
    }

    return array;
  }

  if (str === "menorprecio") {
    let array = [productos[0]];

    for (i = 0; i < productos.length; i++) {
      if (parseInt(productos[i][1]) < parseInt(array[0][1])) {
        array = [productos[i]];
      }
    }

    return array;
  }
}

function eliminar(str) {
  let arrayFinal = [];
  let productoEliminado = [];

  for (i = 0; i < productos.length; i++) {
    if (productos[i][0] !== str) {
      arrayFinal.push(productos[i]);
    } else if (productos[i][0] === str) {
      productoEliminado.push(productos[i]);
    }
  }

  productos = arrayFinal;
  console.log(productoEliminado);
  console.log(productos);
}

function agregar(nombre, precio) {
  let nuevoProducto = [nombre, precio];
  productos.push(nuevoProducto);
  console.log(nuevoProducto);
}

function compararPrecio(prod1, prod2) {
  let arrayFinal = [];

  for (i = 0; i < productos.length; i++) {
    if (productos[i][0] === prod1) {
      arrayFinal.push(productos[i]);
    } else if (productos[i][0] == prod2) {
      arrayFinal.push(productos[i]);
    }
  }

  if (arrayFinal[0][1] === arrayFinal[1][1]) {
    return "Igual precio";
  }
}


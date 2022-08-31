/**
 * Event Loop explicado con imágenes:
 * https://medium.com/@_ferh97/nodejs-y-el-event-loop-21b33fea6b03
 */

/**
 * Módulos nativos de NodeJS
 */

const fs = require("fs");

fs.readFile("./products.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

fs.writeFile("./hola.txt", "Hola!", (err) => {
  if (err) {
    console.log(err);
  } else {
    fs.readFile("./products.txt", "utf-8", (err, data) => {
      console.log(data);
    });
  }
});
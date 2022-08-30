// exports y require
const fn = require("./fn");

console.log(fn.recibir("Juan", "Pérez"));
console.log(fn.despedir("Juan", "Pérez"));

// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

const array = [1, 2, 3, 4, 5];

array.splice(1, 2, { name: "Juan", age: 25 });

//console.log(array);
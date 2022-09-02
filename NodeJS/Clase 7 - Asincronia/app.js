//Este archivo es para mostrar que dos funciones diferentes con promesas si se pueden realizar simultaneamente

const promesa1 = new Promise((res, rej) => {
   if (true) {
      setTimeout(() => {
         res("Esto es la promesa 1");
      }, 5000);
   } else {
      setTimeout(() => {
         rej("Todo mal");
      }, 5000);
   }
});

const promesa2 = new Promise((res, rej) => {
   if (true) {
      setTimeout(() => {
         res("Esto es la promesa 2");
      }, 10000);
   } else {
      setTimeout(() => {
         rej("Todo mal");
      }, 10000);
   }
});

const promise1 = async () => {
   try {
      const response = await promesa1;
      console.log(response);
   } catch (err) {
      console.log(err);
   }
};

const promise2 = async () => {
   try {
      const response = await promesa2;
      console.log(response);
   } catch (err) {
      console.log(err);
   }
};

promise1();
promise2();

let segs = 1;
console.log(segs);

setInterval(() => {
   if (segs < 15) {
      segs += 1;
      console.log(segs);
   } else {
      process.exit();
   }
}, 1000);
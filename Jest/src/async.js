import { getProductById } from './products';

export const getProductByIdAsync = (id) => {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         const product = getProductById(id);

         if (product) {
            resolve(product)
         } else {
            reject('No se pudo encontrar el producto');
         }
      }, 1000);
   })
}
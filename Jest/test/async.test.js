import { getProductByIdAsync } from "../src/async";
import { productsDB } from "../src/data/productsDB";

describe('Pruebas en async.js', () => {

   /* test('Debe devolver un producto por id', (done) => {

      const id = 1;

      getProductByIdAsync(id)
         .then(data => {

            expect(data).toEqual(productsDB.find(product => product.id === id));
            done();
         });

   }); */

   /* test('Debe devolver un producto por id', () => {

      const id = 1;

      return expect(getProductByIdAsync(id)).resolves.toEqual(productsDB.find(product => product.id === id));
   }); */

   test('Debe devolver un producto por id', async () => {
      const id = 1;

      const product = await getProductByIdAsync(id);

      expect(product).toEqual(productsDB.find(product => product.id === id));
   });

});
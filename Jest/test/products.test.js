import { productsDB } from '../src/data/productsDB';
import { getProductByCategory, getProductById } from '../src/products';

describe('Pruebas en products.js', () => {

   test('getProductById tiene que retornar un producto', () => {

      const id = 1;

      const product = getProductById(id);

      // expect(product).toEqual({ id: 1, name: 'Fideos', category: 'alimentos' });
      // expect(product).not.toBeFalsy();
      expect(product).toEqual(productsDB.find(product => product.id === id));
      expect(product).toBeTruthy();

   });

   test('getProductById tiene que retornar undefined', () => {

      const id = 10;

      const product = getProductById(id);

      expect(product).toBeFalsy();
   });

   test('getProductByCategory tiene que retornar un array de productos', () => {

      const category = 'alimentos';

      const product = getProductByCategory(category);

      expect(product.length).toBe(3);
      expect(product).toEqual(expect.arrayContaining([
         expect.objectContaining({
            id: expect.any(Number)
         })
      ]))
   });

});
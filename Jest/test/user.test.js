import { getUser } from '../src/user';

describe('Pruebas en user.js', () => {


   test('getUser debe retornar un objeto', () => {

      const userTest = {
         uid: 123,
         userName: 'ayrds'
      }

      const user = getUser();

      expect(user).toEqual(userTest);
      expect(user).toBeInstanceOf(Object);
      expect(user).toEqual(expect.objectContaining({
         uid: expect.any(Number)
      }))
      expect(user).toMatchObject({
         uid: expect.any(Number)
      });
   });

});
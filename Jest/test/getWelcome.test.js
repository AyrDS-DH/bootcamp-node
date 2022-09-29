import { getWelcome } from '../src/getWelcome';


test('getWelcome debe retonar "Hola Diego"', () => {

   const name = 'Diego';
   const welcome = getWelcome(name);

   expect(welcome).toBe(`Hola ${name}`);
});
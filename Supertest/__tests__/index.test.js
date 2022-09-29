const request = require('supertest');
const { app, server } = require('../index');

afterEach(() => {
   server.close();
});

describe('GET /', () => {

   test('Debe devolver un código de estado 200', async () => {

      const { statusCode, headers } = await request(app).get('/');

      expect(statusCode).toBe(200);
   })

   test('Debe devolver un respuesta tipo JSON', async () => {

      const { headers } = await request(app).get('/');

      expect(headers['content-type']).toEqual(expect.stringContaining('json'));
   })

});
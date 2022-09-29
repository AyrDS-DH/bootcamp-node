const request = require('supertest');
const { app, server } = require('../index');
const generateJWT = require('../helpers/generateJWT');
const db = require('../database/models');

afterEach(() => {
   server.close();
});

describe('POST /user/login', () => {

   test('Debe devolver el usuario logueado con el token', async () => {

      const data = {
         "email": "ayrton@email.com",
         "password": 123456
      }

      const { body, statusCode } = await request(app).post('/users/login').send(data);


      expect(body).toMatchObject({ token: expect.any(String) });
   })

   test('Debe devolver un estado 400 si no envian los datos y con un mensaje de error', async () => {
      const { statusCode, body } = await request(app).post('/users/login').send();

      expect(statusCode).toBe(400);
      expect(body).toEqual(expect.arrayContaining([
         expect.objectContaining({
            msg: expect.any(String)
         })
      ]));
   });
})


describe('GET /users', () => {

   test('Debe obtener todos los usuarios si soy ADMIN', async () => {

      const token = await generateJWT({ role: 'ADMIN' });

      const { body } = await request(app).get('/users').auth(token, { type: 'bearer' });

      expect(body).toEqual(expect.arrayContaining([
         expect.objectContaining({
            id: expect.any(Number)
         })
      ]));

   });

   test('Debe devolver un codigo de estado 401 si no soy ADMIN', async () => {

      const token = await generateJWT({ role: 'USER' });

      const { statusCode } = await request(app).get('/users').auth(token, { type: 'bearer' });

      expect(statusCode).toBe(401);

   });

});


describe('POST /users/new', () => {

   test('Debe crear un usuario en la base de datos', async () => {

      const data = {
         "name": "Eduardo",
         "email": "eduardo@gmail.com",
         "password": 123456
      };

      const originalDB = await db.User.findAll();

      await request(app).post('/users/new').send(data);

      const newDB = await db.User.findAll();

      expect(originalDB.length + 1).toBe(newDB.length);

   });

   test('Debe retornar un codigo 400 si el email existe', async () => {

      const data = {
         "name": "Eduardo",
         "email": "eduardo@gmail.com",
         "password": 123456
      };

      const response = await request(app).post('/users/new').send(data);

      expect(response.statusCode).toBe(400);

   });

});

describe('DELETE /users/:id', () => {

   test('Debe borrar un usuario en la base de datos', async () => {

      const id = "7"
      const token = await generateJWT({ role: 'ADMIN' });
      const originalDB = await db.User.findAll();

      await request(app).delete(`/users/${id}`).auth(token, {type: 'bearer'});

      const newDB = await db.User.findAll();

      expect(originalDB.length - 1).toBe(newDB.length);

   });

});
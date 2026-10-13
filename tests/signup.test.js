const request = require('supertest');
const app = require('../server');

test('POST /signup returns 200', async () => {
  const res = await request(app)
    .post('/signup')
    .send({ email: 'user@example.com', password: 'secret' });

  expect(res.status).toBe(200);
});

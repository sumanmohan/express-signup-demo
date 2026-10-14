test('POST /signup rejects invalid email', async () => {
  const res = await request(app)
    .post('/signup')
    .send({ email: 'invalid-email', password: 'secretpassword' });
  expect(res.statusCode).toBe(400);
  expect(res.body.error).toMatch(/valid email/i);
});
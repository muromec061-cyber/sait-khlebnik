const request = require('supertest');
const app = require('../app');

describe('App Routes', () => {
  test('GET /products', async () => {
    const response = await request(app).get('/products');
    expect(response.statusCode).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });

  test('POST /orders', async () => {
    const response = await request(app).post('/orders').send({
      productId: 1,
      quantity: 2,
      customer: 'John Doe'
    });
    expect(response.statusCode).toBe(201);
    expect(response.body.order.customer).toBe('John Doe');
  });
});
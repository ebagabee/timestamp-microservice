const request = require('supertest');
const app = require('../src/app.js');

describe('Timestamp Microservice', () => {
  it('should return a valid timestamp for a valid date string', async () => {
    const res = await request(app).get('/api/2024-01-01');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('unix');
    expect(res.body).toHaveProperty('utc');
  });

  it('should return an error for an invalid date string', async () => {
    const res = await request(app).get('/api/invalid-date');
    expect(res.statusCode).toEqual(400);
    expect(res.body).toHaveProperty('error', 'Invalid Date');
  });

  it('should return the current timestamp when no date is provided', async () => {
    const res = await request(app).get('/api/');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('unix');
    expect(res.body).toHaveProperty('utc');
  });
});

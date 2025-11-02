const request = require('supertest');
const app = require('../src/index');

describe('App', () => {
  it('should return ok from /health', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe('ok');
  });
});

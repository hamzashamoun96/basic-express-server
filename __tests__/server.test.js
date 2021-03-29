'use strict';
const superTest = require('supertest');
const server = require('../src/server.js');
const request = superTest(server.app);

describe('Server', () => {

  it('Handler Bad Routes', async () => {
    const response = await request.get('/*');
    expect(response.status).toEqual(404);
  });

  it('Handle Bad Methods', async () => {
    const response = await request.get('/*');
    expect(response.request.method).toBe('GET');
  });

  it('Handle person route output', async () => {
    const response = await request.get('/person?name=ahmad');
    expect(response.body).toEqual({"name":'ahmad'});
  });
});
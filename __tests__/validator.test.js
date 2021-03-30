'use strict';
const superTest = require('supertest');
const server = require('../src/server.js');
const request = superTest(server.app);

describe('Validator Middleware Test', () => {
    it('There is no name property', async () => {
      const response = await request.get('/person');
      expect(response.status).toEqual(500);
    });
  
    it('There is name property', async () => {
      const response = await request.get('/person?name=hamza');
      expect(response.status).toEqual(200);
      expect(response.body.name).toEqual('hamza');
    });
  });

'use strict';
const logger = require('../src/middleware/logger.js')

describe('Logger Middleware',()=>{
    let consolee;
    const req = 'hamza';
    const res = {};
    const next = jest.fn()

    beforeEach(()=>{
        consolee = jest.spyOn(console,'log').mockImplementation();
    })
    afterEach(()=>{
        consolee.mockRestore();
    })

    it('Working Correctly',()=>{
        logger(req,res,next);
        expect(consolee).toHaveBeenCalled();
       
    })
})
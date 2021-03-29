'use strict';
const valid = require('../src/middleware/validator')

describe('Validation Middleware',()=>{
    const next = jest.fn()
    let req1 = {query:{"name":undefined}};
    let req2 = {query:{"name":"hamza"}}
    let res = {}
 
    it('There is name property',()=>{
        valid(req1,res,next);
        expect(next).toHaveBeenCalledWith('error'); 
    })
    it('name is string',()=>{
        valid(req2,res,next);
        expect(next).toHaveBeenCalledWith(); 
    })
})
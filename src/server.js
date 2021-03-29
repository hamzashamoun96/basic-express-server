'use strict';

const express = require('express');
// const { nextTick } = require('node:process');
const notFound = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');
const logger = require('./middleware/logger')
const valid = require('./middleware/validator')
const app = express();
app.use(logger)
app.use(express.json());


// app.get('/',(req,res)=>{
// res.send('Hello')
// })
app.get('/person',valid,(req,res)=>{
console.log(req.query)
res.json({"name":req.query.name})
})

app.use('*', notFound);
app.use(errorHandler)

module.exports = {
    app: app,
    start: (port) => {
        const PORT = port || 4000;
        app.listen(PORT, () => {
            console.log(`Heard from port ${PORT}`)
        })
    }
}
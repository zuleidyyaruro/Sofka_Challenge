
// requires
require('dotenv').config();
const express=require('express');
const routes=require('./routes/app.routes');

// app init
const app=express();

// middlewares

// routes
app.use('/', routes);

module.exports=app;

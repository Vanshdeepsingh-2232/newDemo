// const morgan = require('morgan');
const path = require('path');
const express = require('express');
// const { execArgv } = require('process');
// const exp = require('constants');

//Creating express app
const app = express();

// //import Routes
// const userRouter = require('./routes/userRoutes');

// //mount the routers
// app.use('/api/v1/users', userRouter);

//Exports the app to the server.js
module.exports = app;

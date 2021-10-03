const express = require('express');
const morgan = require('morgan');
const userRoutes = require('./routes/user-routes');

// Middlewares
const app = new express();
app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
  console.log('This is middleware');
  next();
});

// Routes
app.use('/api/auth', userRoutes);

// Start Server
module.exports = app;

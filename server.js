const dotenv = require('dotenv');
const mongoose = require('mongoose');
dotenv.config({path: `${__dirname}/config.env`});

const app = require('./app');

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`)
});

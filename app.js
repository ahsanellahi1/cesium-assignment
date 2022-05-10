const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const materialsRouter = require('./routes/materials');

const app = express();

app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);
app.use(logger('dev'));
app.use(express.json());

app.use('/materials', materialsRouter);

module.exports = app;

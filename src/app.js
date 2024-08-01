const express = require('express');
const timestampRoutes = require('./routes/timestampRoutes.js');

const app = express();

app.use(express.json());

app.use('/api', timestampRoutes);

module.exports= app;
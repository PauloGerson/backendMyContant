const express = require('express');

const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(routes); //Middleware

app.listen(3000, () => console.log('Iniciado servidor http://localhost:3000'));

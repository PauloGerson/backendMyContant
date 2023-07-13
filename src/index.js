const express = require('express');
require('express-async-errors')

const routes = require('./routes');

const app = express();
app.use(express.json());

app.use(routes); //Middleware
app.use((error,request, response, next)  => {
  console.log('#### ERROR Handler')
  console.log(error);
  response.sendStatus(500)
})

app.listen(3000, () => console.log('Iniciado servidor http://localhost:3000'));

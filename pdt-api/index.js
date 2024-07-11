const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

// Rotas
app.use('/produtos', require('./routes/routesProduct.js'));

app.listen(port, () => {
  console.log(`Rodando na http://localhost:${port}`);
});

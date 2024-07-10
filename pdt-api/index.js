const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Produtos API');
});

app.listen(port, () => {
  console.log(`Rodando na http://localhost:${port}`);
});
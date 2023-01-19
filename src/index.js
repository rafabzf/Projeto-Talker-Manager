const express = require('express');
const fs = require('fs').promises;

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';
const path = './src/talker.json';

// não remova esse endpoint, e para o avaliador funcionar.
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (req, res) => {
  const file = await fs.readFile(path, 'utf-8');
  res.status(HTTP_OK_STATUS).json(JSON.parse(file)); 
});

app.listen(PORT, () => {
  console.log('Online');
});

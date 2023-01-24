const express = require('express');
const talkerManager = require('./utils/talkerManager');
const validationPassword = require('./middleware/validationPassword');
const { validationEmail } = require('./middleware/validationEmail');
const tokenGenerated = require('./middleware/tokenGenerated');

const app = express();

app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar.
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.get('/talker', async (_req, res) => {
  const file = await talkerManager();
  res.status(HTTP_OK_STATUS).json(file); 
});

app.get('/talker/:id', async (req, res) => {
  const { id } = req.params;
  const file = await talkerManager();
  const fileId = file.filter((element) => element.id === Number(id))[0] || [];
  if (fileId.length === 0) {
    return res
    .status(404)
    .json({  
      message: 'Pessoa palestrante não encontrada',
    });
  }
  res.status(HTTP_OK_STATUS).json(fileId);
});

app.post('/login', validationEmail, validationPassword, (_req, res) => {
  res.status(HTTP_OK_STATUS).json({ token:
    tokenGenerated() });
});

app.listen(PORT, () => {
  console.log('Online');
});

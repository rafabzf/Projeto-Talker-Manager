const express = require('express');
const loginRoutes = require('./routes/loginRoutes');
const talkerRoutes = require('./routes/talkerRoutes');

const app = express();

app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar.
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', talkerRoutes);
app.use('/login', loginRoutes);

app.listen(PORT, () => {
  console.log('Online');
});

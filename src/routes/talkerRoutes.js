const express = require('express');
const { writeFile } = require('fs').promises;
const path = require('path');
const talkerManager = require('../utils/talkerManager');
const validationTalkerPost = require('../middleware/validationTalkerPost');
const talkerPost = require('../utils/talkerPost');
const talkerIndex = require('../utils/talkerIndex');
const validationToken = require('../middleware/validationToken');
const talkerWrite = require('../utils/talkerWrite');

const talkerRoutes = express.Router();

talkerRoutes.get('/', async (_req, res) => {
  const file = await talkerManager();
  res.status(200)
  .json(file);
});

talkerRoutes.get('/:id', async (req, res) => {
  const { id } = req.params;
  const file = await talkerManager();
  const fileById = file.filter((element) => element.id === Number(id))[0] || [];

  if (fileById.length === 0) {
    return res
    .status(404)
    .json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(200)
  .json(fileById);
});

talkerRoutes.post('/', validationTalkerPost, async (req, res) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;

  const newTalker = {
    name,
    age,
    id: await talkerIndex(),
    talk: { watchedAt, rate },
  };

  await talkerPost(newTalker);

  return res
  .status(201)
  .json(newTalker);
});

talkerRoutes.put('/:id', validationTalkerPost, async (req, res) => {
  const { name, age, talk: { watchedAt, rate } } = req.body;
  const fileTalker = await talkerManager();
  const idParams = Number(req.params.id);
  const newTalker = {
    name, age, id: idParams, talk: { watchedAt, rate },
  };

  const talkerFind = fileTalker.find((element) => element.id === idParams);
  const index = fileTalker.indexOf(talkerFind);

  fileTalker.splice(index, 1, newTalker);

  const newFile = JSON.stringify(fileTalker, null, 2);
  const pwdTalker = path.resolve('src', 'talker.json');
  
  await writeFile(pwdTalker, newFile);
  res.status(200)
  .json(newTalker);
});

talkerRoutes.delete('/:id', validationToken, async (req, res) => {
  const idParams = Number(req.params.id);
  const fileTalker = (await talkerManager())
  .filter((talker) => talker.id !== idParams);

  await talkerWrite(fileTalker);
  res.status(204)
  .end();
});

module.exports = talkerRoutes;
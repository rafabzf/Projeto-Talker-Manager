const { writeFile } = require('fs').promises;
const path = require('path');

const talkerManager = require('./talkerManager');

const talkerPost = async (newTalker) => {
  const fileTalker = await talkerManager();
  fileTalker.push(newTalker);

  const newFile = JSON.stringify(fileTalker, null, 2);
  const pwd = path.resolve('src', 'talker.json');

  await writeFile(pwd, newFile);
};

module.exports = talkerPost;
const { writeFile } = require('fs').promises;

const path = require('path');

const talkerManager = require('./talkerManager');

const talkerPost = async (newTalker) => {
  const file = await talkerManager();
  file.push(newTalker);
  const newFile = JSON.stringify(file, null, 2);
  const pwd = path.resolve('src', 'talker.json');
  await writeFile(pwd, newFile);
};
module.exports = talkerPost;
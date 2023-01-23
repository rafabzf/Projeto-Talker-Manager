const fs = require('fs').promises;

const talker = 'src/talker.json';

const talkerManager = async () => JSON.parse(
  await fs.readFile(talker, 'utf-8'),
);

module.exports = talkerManager;
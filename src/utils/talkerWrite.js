const path = './src/talker.json';

const fs = require('fs').promises;

const talkerWrite = async (data) => fs.writeFile(path, JSON.stringify(
  data, null, 2,
));

module.exports = talkerWrite;
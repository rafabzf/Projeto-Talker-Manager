const talkerManager = require('./talkerManager');

const talkerIndex = async () => {
  const talkers = await talkerManager();
  return Math.max(...talkers.map((element) => 
  element.id)) + 1;
};

module.exports = talkerIndex;
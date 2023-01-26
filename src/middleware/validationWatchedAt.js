const validationDate = require('../utils/validationDate');

const validationWatchedAt = (req, res, next) => {
  const { talk: { watchedAt } } = req.body;
  if (!watchedAt) {
    return res
    .status(400)
    .json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  if (!validationDate(watchedAt)) {
    return res
    .status(400)
    .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  next();
};

module.exports = validationWatchedAt;
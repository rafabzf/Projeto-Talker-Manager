const validationPassword = (req, res, next) => {
  if (!req.body.password || req.body.password.length === 0) {
    return res
    .status(400)
    .json({ message: 'O campo "password" é obrigatório' });
  }

  if (req.body.password.length < 6) {
    return res
    .status(400)
    .json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  next();
};

module.exports = validationPassword;
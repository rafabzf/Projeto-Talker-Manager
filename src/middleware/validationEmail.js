const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

const validationEmail = (req, res, next) => {
  if (!req.body.email || req.body.email.length === 0) {
    return res.status(400)
    .json({ message: 'O campo "email" é obrigatório' });
  }

  const { email } = req.body;

  if (!regex.test(email)) {
    return res.status(400)
    .json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }
  next();
};

module.exports = { validationEmail };
const validationAge = (req, res, next) => {
  const { age } = req.body;

  switch (true) {
    case !age:
      return res.status(400)
      .json({ message: 'O campo "age" é obrigatório' });
    case age < 18:
      return res.status(400)
      .json({ message: 'A pessoa palestrante deve ser maior de idade' });
    default:
      next();
  }
};

module.exports = validationAge;
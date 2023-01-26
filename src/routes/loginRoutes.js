const express = require('express');
const { validationEmail } = require('../middleware/validationEmail');
const validationPassword = require('../middleware/validationPassword');
const tokenGenerated = require('../utils/tokenGenerated');

const loginRoutes = express.Router();

loginRoutes.post('/', validationEmail, validationPassword, (_req, res) => {
  res.status(200)
  .json({ token: tokenGenerated() });
});

module.exports = loginRoutes;
// const express = require('express');
// const validationAge = require('./validationAge');
// const validationTalk = require('./validationTalk');
// const validationToken = require('./validationToken');
// const validationWatchedAt = require('./validationWatchedAt');
// const validationName = require('./validationName');
// const validationRate = require('./validationRate');

// const validationTalkerPost = express();

// validationTalkerPost.use(
//   '/',
//   validationAge,
//   validationName,
//   validationRate,
//   validationTalk,
//   validationToken,
//   validationWatchedAt,
//   (_req, _res, next) => next(),
// );

// module.exports = validationTalkerPost;

const express = require('express');
const validationAge = require('./validationAge');
const validationName = require('./validationName');
const validationRate = require('./validationRate');
const validationTalk = require('./validationTalk');
const validationToken = require('./validationToken');
const validationWatchedAt = require('./validationWatchedAt');

const validationTalkerPost = express();

validationTalkerPost
.use('/',
validationToken, 
validationName, 
validationAge, 
validationTalk, 
validationWatchedAt, 
validationRate, 
(_req, _res, next) => next());

module.exports = validationTalkerPost;
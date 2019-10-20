const router = require('../endpoint/router');
const logger = require('./logger');
const express = require('express');
const app = express();
const port = 4000;  //use configs for this
app.use('/',router);
app.listen(port);
logger.info('API server listening at port '+port)
module.exports = app;
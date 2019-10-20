const express = require('express');
const resultsController = require('./results/controller');
const submitController = require('./submit/controller');
const router = express.Router();
router.use('/results',resultsController);
router.use('/submit',submitController);
module.exports = router;
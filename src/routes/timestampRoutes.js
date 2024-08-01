const express = require('express');
const { getTimestamp } = require('../controllers/timestampController.js');

const router = express.Router();

router.get('/:date?', getTimestamp);

module.exports = router;
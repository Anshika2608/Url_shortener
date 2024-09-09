const express = require('express');
const submitUrl = require('../Controller/UrlController');

const router = express.Router();

router.post('/submitUrl', submitUrl);

module.exports = router;

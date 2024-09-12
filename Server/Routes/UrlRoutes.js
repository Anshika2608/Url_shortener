const express = require('express');
const {submitUrl,redirectOriginal }= require('../Controller/UrlController');

const router = express.Router();

router.post('/submitUrl', submitUrl);
router.get('/:urlId',redirectOriginal)
module.exports = router;

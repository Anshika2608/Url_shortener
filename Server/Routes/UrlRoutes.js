const express = require('express');
const {submitUrl,redirectOriginal }= require('../Controller/UrlController');

const router = express.Router();

router.post('/submitUrl', submitUrl);
router.get('/redirectOriginal',redirectOriginal)
module.exports = router;

const express = require('express');
const router = express.Router();
const search = require('../Controllers/search');


router.get('/search', search)

module.exports = router;
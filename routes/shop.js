const path = require('path');
const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

router.use('/', (req, res, next) => { //we can use use
    res.sendFile(path.join(rootDir, 'views','shop.html'));
});

module.exports = router;
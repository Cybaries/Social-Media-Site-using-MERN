const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

// @route   GET api/posts
// @desc    Test route
// @access  Private
router.get('/', (req, res) => res.send('Post route'));

module.exports = router;
const express = require('express');
const router = express.Router();
const originalController = require("../controllers/originalController")

router.route('/')
    .get(originalController.originalIndex)
    .post(originalController.originalQueryAction)

module.exports = router;

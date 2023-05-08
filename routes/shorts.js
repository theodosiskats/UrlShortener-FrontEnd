const express = require('express');
const shortController = require("../controllers/shortController");
const router = express.Router();

router.route('/')
    .get(shortController.shortIndex)
    .post(shortController.shortQueryAction)

module.exports = router;

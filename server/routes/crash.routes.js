const router = require('express').Router();
const crash = require("../controllers/crash.controller.js");

// Retrieve all Crashes with condition
router.get("/", crash.findAll);

module.exports = router;
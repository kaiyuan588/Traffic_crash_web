const router = require('express').Router();
const driver = require("../controllers/driver.controller.js");

// Retrieve all Drivers with condition
router.get("/", driver.findAll);

module.exports = router;
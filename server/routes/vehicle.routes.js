const router = require('express').Router();
const vehicle = require("../controllers/vehicle.controller.js");

// Retrieve all Vehicles with condition
router.get("/", vehicle.findAll);

module.exports = router;
const express = require('express');
const app = express();
const db = require("./models");
const crashRouter = require("./routes/crash.routes");
const driverRouter = require("./routes/driver.routes");
const vehicleRouter = require("./routes/vehicle.routes");
const cors = require("cors");

require('dotenv').config();

db.sequelize.sync();

app.use(cors());

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server listening at http://localhost:${process.env.SERVER_PORT}`)
})
const crashRouter = require("./crash.routes");
const driverRouter = require("./driver.routes");
const vehicleRouter = require("./vehicle.routes");

const routes = app => {
    app.use(crashRouter);
    app.use(driverRouter);
    app.use(vehicleRouter);

    return app;
};

module.exports = routes;
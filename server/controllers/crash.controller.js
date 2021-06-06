const db = require("../models");
const Crash = db.crash;

// Retrieve all Crashes from the database with condition.
exports.findAll = (req, res) => {
    const report_number = req.query.report_number;

    if (report_number) {
        Crash
            .findByPk(report_number)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: `Error retrieving Crash with report_number=${report_number}`
                });
            });
    } else {
        Crash
            .findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Error retrieving all Crashes."
                });
            });
    }
};


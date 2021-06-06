const db = require("../models");
const Driver = db.driver;

exports.findAll = (req, res) => {
    const report_number = req.query.report_number;
    const vehicle_number = req.query.vehicle_number;
    const person_number = req.query.person_number;

    if (report_number && vehicle_number && !person_number) {
        Driver
            .findAll({
                where: {
                    report_number: report_number,
                    vehicle_number: vehicle_number,
                }
            })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: `Error retrieving Driver with report_number=${report_number} and vehicle_number=${vehicle_number}`
                });
            });
    } else if (report_number && vehicle_number && person_number) {
        Driver
            .findOne({
                where: {
                    report_number: report_number,
                    vehicle_number: vehicle_number,
                    person_number: person_number
                }
            })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: `Error retrieving Driver with report_number=${report_number} and vehicle_number=${vehicle_number} and person_number=${person_number}`
                });
            });
    } else {
        Driver
            .findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Error retrieving all Drivers."
                });
            });
    }
};

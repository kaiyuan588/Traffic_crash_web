const db = require("../models");
const Vehicle = db.vehicle;

exports.findAll = (req, res) => {
    const report_number = req.query.report_number;
    const vehicle_number = req.query.vehicle_number;

    if (report_number && !vehicle_number) {
        Vehicle
            .findAll({
                where: {
                    report_number: report_number,
                }
            })
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message: `Error retrieving Driver with report_number=${report_number}`
                });
            });
    } else if (report_number && vehicle_number) {
        Vehicle
            .findOne({
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
    } else {
        Vehicle
            .findAll()
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Error retrieving all Vehicles."
                });
            });
    }
};

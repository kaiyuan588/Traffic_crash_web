import React, { useState, useEffect } from "react";
import { Card, Badge, Container, Row, Table} from 'react-bootstrap';
import { getVehiclesByReportNumber, getDriversByVehicleNumber } from "../api/api";
import "./crash-card.css";

export default function CrashCard({ crash }) {
    const [vehicleDetail, setVehicleDetail] = useState([]);

    const init = () => {
        setVehicleDetail([]);
        getVehiclesByReportNumber(crash.report_number)
            .then(vehiclesData => {
                if (vehiclesData) {
                    vehiclesData.forEach(v => {
                        v.color = colorMap(v.color);
                        if (v) {
                            getDriversByVehicleNumber(crash.report_number, v.vehicle_number).then(driverData => {
                                let temp = {
                                    drivers: driverData
                                };
                                setVehicleDetail(vehicleDetail => [...vehicleDetail, { ...v, ...temp }]);
                            })
                        }
                    })
                }
            });
    };

    const colorMap = (color) => {
        switch (color) {
            case "WHT":
                return "White";
            case "BLU":
                return "Blue";
            case "BLK":
                return "White";
            case "GRN":
                return "Blue";
            case "SIL":
                return "White";
            default:
                return "Red";
        }
    }

    const injuryMap = (injury) => {
        if (injury === "Fatal" || injury === "Serious Injury") {
            return "danger"
        } else if (injury === "Injury") {
            return "warning";
        } else {
            return "success";
        }
    }

    const genderMap = (sex) => {
        return sex === "F"? "Female": "Male";
    }

    useEffect(() => {
        init();
    }, []);

    return (
        <Card className="crash-card">
            <Card.Header className="crash-card-header">
                <Container>
                    <Row>
                        <Badge variant={injuryMap(crash.crash_severity)} className="float-right">{crash.crash_severity}</Badge>
                    </Row>
                    <Row>
                        {crash.on_street} @ {crash.city}, {crash.county}
                    </Row>
                </Container>
            </Card.Header>

            <Card.Body>
                {vehicleDetail.map((vehicle) => (
                    <Table striped bordered hover>
                        <tr>
                            <th>Vehicle {vehicle.vehicle_number}</th>
                            <td>{vehicle.color} {vehicle.year} {vehicle.make} {vehicle.model}</td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>Vehicle was <b>{vehicle.maneuver}</b> in <b>{vehicle.traveling_on_street}</b> heaing <b>{vehicle.traveling_direction}</b></td>
                        </tr>
                        {vehicle.drivers.map((driver) => (
                            <tr>
                                <th>Person {driver.person_number}</th>
                                <td> {genderMap(driver.sex)}, {driver.age} years old <Badge variant={injuryMap(driver.injury_severity)} className="float-right">{driver.injury_severity}</Badge> </td>
                            </tr>
                        ))}
                    </Table>

                ))}
            </Card.Body>
        </Card>
    );
};


module.exports = (sequelize, Sequelize) => {
    const Vehicle = sequelize.define("vehicle", {
        report_number: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        vehicle_number: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        year: {
            type: Sequelize.INTEGER
        },
        make: {
            type: Sequelize.STRING
        },
        model: {
            type: Sequelize.STRING
        },
        color: {
            type: Sequelize.STRING
        },
        traveling_on_street: {
            type: Sequelize.STRING
        },
        traveling_direction: {
            type: Sequelize.STRING
        },
        maneuver: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true
    });

    return Vehicle;
};
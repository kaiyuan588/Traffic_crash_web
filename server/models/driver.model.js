module.exports = (sequelize, Sequelize) => {
    const Driver = sequelize.define("driver", {
        report_number: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        vehicle_number: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        person_number: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        injury_severity: {
            type: Sequelize.STRING
        },
        sex: {
            type: Sequelize.STRING
        },
        age: {
            type: Sequelize.INTEGER
        },
        restraint_systems: {
            type: Sequelize.STRING
        }
    }, {
        freezeTableName: true
    });

    return Driver;
};
module.exports = (sequelize, Sequelize) => {
    const Crash = sequelize.define("crash_event", {
        report_number: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        crash_date_time: {
            type: Sequelize.STRING
        },
        county: {
            type: Sequelize.STRING
        },
        city: {
            type: Sequelize.STRING
        },
        investigating_agency: {
            type: Sequelize.STRING
        },
        on_street: {
            type: Sequelize.STRING
        },
        offset_feet: {
            type: Sequelize.STRING
        },
        offset_direction: {
            type: Sequelize.STRING
        },
        from_intersecting_street: {
            type: Sequelize.STRING
        },
        crash_severity: {
            type: Sequelize.STRING
        },
        latitude: {
            type: Sequelize.DOUBLE
        },
        longitude: {
            type: Sequelize.DOUBLE
        }
    }, {
        freezeTableName: true
    });

    return Crash;
};
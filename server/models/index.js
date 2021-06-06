const { Sequelize } = require('sequelize');
const config = require("../config/db.config.js");

const sequelize = new Sequelize(
    config.DATABASE,
    config.USER,
    config.PASSWORD,
    {
        port: config.PORT,
        host: config.HOST,
        dialect: config.dialect,
        logging: false,
        define: {
            timestamps: false
        }
    }
);

try {
    sequelize.authenticate().then(() => {
        console.log(`Connection to ${config.DATABASE} in ${config.HOST}:${config.PORT} has been established successfully.`);
    })
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
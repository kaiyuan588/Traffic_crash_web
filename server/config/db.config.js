require('dotenv').config();

module.exports = {
    HOST: process.env.DB_HOST,
    PORT: process.env.DB_PORT || 5000,
    USER: process.env.DB_USER,
    PASSWORD: process.env.DB_PASSWORD,
    DATABASE: process.env.DB_SCHEMA,
    dialect: process.env.DIALECT,
    pool: {
        max: 15,
        min: 5,
        acquire: 30000,
        idle: 20000,
        evict: 15000
    }
};
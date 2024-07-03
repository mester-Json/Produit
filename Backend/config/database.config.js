const { Sequelize } = require('sequelize');
const config = require('./config.json').development;

const sequelize = new Sequelize({
    host: config.host,
    username: config.username,
    password: config.password,
    database: config.database,
    port: config.port,
    dialect: config.dialect,
    logging: false
});

module.exports = sequelize;

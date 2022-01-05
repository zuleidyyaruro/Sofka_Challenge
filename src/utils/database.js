const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sofka', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
});

module.exports=sequelize;
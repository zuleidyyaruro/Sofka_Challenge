const Sequelize = require('sequelize');
const db = require('../utils/database');

const Categories = db.define('categories', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descriptionCategory: {
        type: Sequelize.STRING,
        unique: true,
    }
}, {
    timestamps: false
});

module.exports = Categories;
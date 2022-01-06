const Sequelize = require('sequelize');
const db = require('../utils/database');
const categories = require('./categories.models');

const Questions = db.define('questions', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descriptionQuestion: {
        type: Sequelize.STRING(255),
    }
}, {
    timestamps: false
});

Questions.belongsTo(categories);

module.exports = Questions;
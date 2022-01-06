const Sequelize = require('sequelize');
const db = require('../utils/database');
const questions = require('./questions.models');

const Answers = db.define('answers', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    descriptionAnswer: {
        type: Sequelize.STRING(255),
    },
    isCorrect: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

Answers.belongsTo(questions);

module.exports = Answers;
const Sequelize = require('sequelize');

const Users = require('../models/users.models');
const Categories = require('../models/categories.models');
const Questions = require('../models/questions.models');
const Answers = require('../models/answers.models');

exports.youLose = async(req, res) => {
    const users = Users.findOne({ where: { id: req.user.id } });
    const { dataValues: { username } } = await Promise.resolve(users);
    const { dataValues: { points_earned } } = await Promise.resolve(users);
    res.render('youlose', {
        title: 'Lose!',
        username, 
        points_earned
    })
}

exports.withdraw = async(req, res) => {
    const users = Users.findOne({ where: { id: req.user.id } });
    const { dataValues: { username } } = await Promise.resolve(users);
    const { dataValues: { points_earned } } = await Promise.resolve(users);
    res.render('withdraw', {
        title: 'Withdraw!',
        username, 
        points_earned
    })
}

exports.youWin = async(req, res) => {
    const users = Users.findOne({ where: { id: req.user.id } });
    const { dataValues: { username } } = await Promise.resolve(users);
    const { dataValues: { points_earned } } = await Promise.resolve(users);
    res.render('youwin', {
        title: 'Win!',
        username,
        points_earned
    })
}

// question level one

exports.firstsQuestions = async (req, res, next) => {

    const categories = Categories.findOne({ where: { id: 1 } });
    const { dataValues: { descriptionCategory } } = await Promise.resolve(categories);

    const users = Users.findOne({ where: { id: req.user.id } });
    const { dataValues: { username } } = await Promise.resolve(users);
    const { dataValues: { points_earned } } = await Promise.resolve(users);

    const questions = Questions.findOne({ where: { categoryId: 1 }, order: Sequelize.literal('rand()'), limit: 1 });
    const { dataValues: { descriptionQuestion } } = await Promise.resolve(questions);
    const { dataValues: { id } } = await Promise.resolve(questions);

    const answers = Answers.findAll({ where: { questionId: id }, order: Sequelize.literal('rand()'), limit: 5 })
    const answersPromise = await Promise.resolve(answers);

    res.render('question', {
        title: 'Question 1',
        route: 'first-question',
        descriptionCategory,
        username,
        descriptionQuestion,
        answersPromise,
        points_earned
    });
};

exports.secondsQuestions = async (req, res, next) => {

    const categories = Categories.findOne({ where: { id: 2 } });
    const { dataValues: { descriptionCategory } } = await Promise.resolve(categories);

    const users = Users.findOne({ where: { id: req.user.id } });
    const { dataValues: { username } } = await Promise.resolve(users);
    const { dataValues: { points_earned } } = await Promise.resolve(users);

    const questions = Questions.findOne({ where: { categoryId: 2 }, order: Sequelize.literal('rand()'), limit: 1 });
    const { dataValues: { descriptionQuestion } } = await Promise.resolve(questions);
    const { dataValues: { id } } = await Promise.resolve(questions);

    const answers = Answers.findAll({ where: { questionId: id }, order: Sequelize.literal('rand()'), limit: 5 })
    const answersPromise = await Promise.resolve(answers);

    res.render('question', {
        title: 'Question 2',
        route: 'second-question',
        descriptionCategory,
        username,
        descriptionQuestion,
        answersPromise,
        points_earned
    });
};

exports.thirdsQuestions = async (req, res, next) => {

    const categories = Categories.findOne({ where: { id: 3 } });
    const { dataValues: { descriptionCategory } } = await Promise.resolve(categories);

    const users = Users.findOne({ where: { id: req.user.id } });
    const { dataValues: { username } } = await Promise.resolve(users);
    const { dataValues: { points_earned } } = await Promise.resolve(users);

    const questions = Questions.findOne({ where: { categoryId: 3 }, order: Sequelize.literal('rand()'), limit: 1 });
    const { dataValues: { descriptionQuestion } } = await Promise.resolve(questions);
    const { dataValues: { id } } = await Promise.resolve(questions);

    const answers = Answers.findAll({ where: { questionId: id }, order: Sequelize.literal('rand()'), limit: 5 })
    const answersPromise = await Promise.resolve(answers);

    res.render('question', {
        title: 'Question 3',
        route: 'third-question',
        descriptionCategory,
        username,
        descriptionQuestion,
        answersPromise,
        points_earned
    });
};

exports.fourthsQuestions = async (req, res, next) => {

    const categories = Categories.findOne({ where: { id: 4 } });
    const { dataValues: { descriptionCategory } } = await Promise.resolve(categories);

    const users = Users.findOne({ where: { id: req.user.id } });
    const { dataValues: { username } } = await Promise.resolve(users);
    const { dataValues: { points_earned } } = await Promise.resolve(users);

    const questions = Questions.findOne({ where: { categoryId: 4 }, order: Sequelize.literal('rand()'), limit: 1 });
    const { dataValues: { descriptionQuestion } } = await Promise.resolve(questions);
    const { dataValues: { id } } = await Promise.resolve(questions);

    const answers = Answers.findAll({ where: { questionId: id }, order: Sequelize.literal('rand()'), limit: 5 })
    const answersPromise = await Promise.resolve(answers);

    res.render('question', {
        title: 'Question 4',
        route: 'fourth-question',
        descriptionCategory,
        username,
        descriptionQuestion,
        answersPromise,
        points_earned
    });
};

exports.fifthsQuestions = async (req, res, next) => {

    const categories = Categories.findOne({ where: { id: 5 } });
    const { dataValues: { descriptionCategory } } = await Promise.resolve(categories);

    const users = Users.findOne({ where: { id: req.user.id } });
    const { dataValues: { username } } = await Promise.resolve(users);
    const { dataValues: { points_earned } } = await Promise.resolve(users);

    const questions = Questions.findOne({ where: { categoryId: 5 }, order: Sequelize.literal('rand()'), limit: 1 });
    const { dataValues: { descriptionQuestion } } = await Promise.resolve(questions);
    const { dataValues: { id } } = await Promise.resolve(questions);

    const answers = Answers.findAll({ where: { questionId: id }, order: Sequelize.literal('rand()'), limit: 5 })
    const answersPromise = await Promise.resolve(answers);

    res.render('question', {
        title: 'Question 5',
        route: 'fifth-question',
        descriptionCategory,
        username,
        descriptionQuestion,
        answersPromise,
        points_earned
    });
};
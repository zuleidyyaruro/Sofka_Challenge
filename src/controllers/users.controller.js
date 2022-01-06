const Users = require('../models/users.models');

exports.formRegister = (req, res) => {
    res.render('register', {
        title: 'Register'
    })
};

exports.register = async (req, res) => {
    const { username, password } = req.body;
    try {
        await Users.create({
            username,
            password
        });
        res.redirect('/login')
    } catch (error) {
        req.flash('error', error.errors.map(error => error.message));
        res.render('register', {
            messages: req.flash(),
            title: 'Register'
        })
    }
};

exports.formLogin = (req, res) => {
    const { error } = res.locals.messages;
    res.render('login', {
        title: 'Login',
        error,
    })
}

//  ***********************

exports.pointsEarned1 = async (req, res, next) => {
    const user = await Users.findOne({ where: { id: req.user.id } });
    const { points_earned } = req.body;
    user.points_earned = user.dataValues.points_earned + 1;
    await user.save();
    res.redirect('/second-question');
}

exports.pointsEarned2 = async (req, res, next) => {
    const user = await Users.findOne({ where: { id: req.user.id } });
    const { points_earned } = req.body;
    user.points_earned = user.dataValues.points_earned + 2;
    await user.save();
    res.redirect('/third-question');
}

exports.pointsEarned3 = async (req, res, next) => {
    const user = await Users.findOne({ where: { id: req.user.id } });
    const { points_earned } = req.body;
    user.points_earned = user.dataValues.points_earned + 4;
    await user.save();
    res.redirect('/fourth-question');
}

exports.pointsEarned4 = async (req, res, next) => {
    const user = await Users.findOne({ where: { id: req.user.id } });
    const { points_earned } = req.body;
    user.points_earned = user.dataValues.points_earned + 5;
    await user.save();
    res.redirect('/fifth-question');
}

exports.pointsEarned5 = async (req, res, next) => {
    const user = await Users.findOne({ where: { id: req.user.id } });
    const { points_earned } = req.body;
    user.points_earned = user.dataValues.points_earned + 10;
    console.log(user)
    res.redirect('/youwin');
}
const passport = require('passport');

exports.authUser = passport.authenticate('local', {
    successRedirect: '/first-question',
    failureRedirect: '/login',
    failureFlash: true,
    badRequestMessage: 'Both fields are required'
});

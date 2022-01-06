const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('../models/users.models');

passport.use(
    new LocalStrategy(
        {
            usernameField: 'username',
            passwordField: 'password'
        },
        async (username, password, done) => {
            try {
                const user = await Users.findOne({
                    where: { username: username }
                });

                if (!user) {
                    return done(null, false, { message: 'Username doesnt exist' });
                }

                if (!user.verifyPassword(password)) {
                    return done(null, false, { message: 'Invalid Password' });
                }

                return done(null, user);

            } catch (error) {
                return done(null, false, {
                    message: 'The Account doesnt Exist'
                });
            }
        }
    ));

passport.serializeUser((user, callback) => {
    callback(null, user);
});

passport.deserializeUser((user, callback)=> {
    callback(null, user);
});

module.exports = passport;
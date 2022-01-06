const Sequelize = require('sequelize');
const db = require('../utils/database');
const bcrypt = require('bcrypt');

const Users = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING(60),
        allowNull: false,
        unique: {
            args: true,
            msg: 'Registered User'
        },
        validate: {
            customeValidate: function (value, next) {
                Users.findOne({where: {username: value}})
                    .then(function (user) {
                        if(user && this.id !== user.id) {
                            return next('Registered User');
                        }
                            return next();
                    }).catch((err) => {
                        return next(err);
                    });
            }
        }
    },
    password: {
        type: Sequelize.STRING(60),
        allowNull: false,
        validate: {
            notEmpty: {
                msg: 'Password cannot be empty'
            }
        }  
    },
    points_earned: {
        type: Sequelize.INTEGER,
        defaultValue: 0
    }
}, {
    hooks: {
        beforeCreate(player) {
            player.password = bcrypt.hashSync(player.password, bcrypt.genSaltSync(10), null);
        }
    }
});

//Method to compare passwords
Users.prototype.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
}

module.exports = Users;
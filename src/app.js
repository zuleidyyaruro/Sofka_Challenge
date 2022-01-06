
// requires
require('dotenv').config();
const express = require('express');
const routes = require('./routes/app.routes');
const path = require('path');
const flash = require('connect-flash');
const session = require('cookie-session');
const cookieParser = require('cookie-parser');
const passport = require('./utils/local-auth');

// import models
require('./models/users.models');
// require('./models/categories.models');
// require('./models/questions.models');
// require('./models/answers.models');

// app init
const app = express();

// enable pug
app.set('view engine', 'pug');

// json urlencoded
app.use(express.json());
app.use(express.urlencoded());

// enable views
app.set('views', path.join(__dirname, './views'));

app.use(cookieParser())

// 
app.use(session({
    secret: 'secreto',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());

// flash messages
app.use(flash());


app.use((req, res, next) => {
    res.locals.messages = req.flash();
    next();
});

// routes
app.use('/', routes);

module.exports = app;

var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
// var hbs = require('hbs');
var ejs = require('ejs');
var engine = require('ejs-mate');
var session = require('express-session');
var cookieParser = require('cookie-Parser');
var flash = require('express-flash');
var MongoStore = require('connect-mongo')(session);
var passport = require('passport');


// local import 
var secret = require('./config/secret');
var User = require('./models/user');

// connection to the database
var app= express();
mongoose.connect(secret.database,(err,db)=>{
    if (err){
        return console.log('unable to connect to mongoDB server');
    }
    console.log('connected to  mongodb server..!');
});

// middleware
app.use(express.static(__dirname + '/assets'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: secret.secretKey,
    store: new MongoStore({ url: secret.database, autoReconnect: true})
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());



app.engine('ejs', engine);
// hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'ejs');


var mainRoutes = require('./routes/main');
var userRoutes = require('./routes/user');

app.use(mainRoutes);
app.use(userRoutes);


// listening port 

app.listen(secret.port , function(err){

    if(err) throw err;

    console.log('Server is Running on port' + secret.port);

});
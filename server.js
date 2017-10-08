var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');


// var hbs = require('hbs');
var ejs = require('ejs');
var engine = require('ejs-mate');

// local import 
var User = require('./models/user');

// connection to the database
var app= express();
mongoose.connect('mongodb://localhost:27017/Amazon',(err,db)=>{
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

app.engine('ejs', engine);
// hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'ejs');

// routes
app.post('/create-user', function(req, res, next){
//
var user = new User();
//

user.profile.name = req.body.name;
user.password= req.body.password;
user.email= req.body.email;

//
user.save(function(err){

    if(err) return next(err);
    res.json('new User Created');
});
});

// Routes
app.get('/',(req,res)=>{
    res.render('main/home.ejs');
});

app.get('/about', (req, res)=>{
    res.render('main/about.ejs');

});

// listening port 

app.listen(3000 , function(err){

    if(err) throw err;

    console.log('Server is Running on port 3000');

});
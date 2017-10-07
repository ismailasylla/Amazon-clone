var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./models/user');

var app= express();

// connection to the database

mongoose.connect('mongodb://localhost:27017/Amazon',(err,db)=>{
    if (err){
        return console.log('unable to connect to mongoDB server');
    }
    console.log('connected to  mongodb server..!');
});

// middleware

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.post('/create-user', function(req, res, next){
//
var user = new User();
//
user.profile.name = req.body.name;
//
user.password= req.body.password;
user.email= req.body.email;
//
user.save(function(err){

    if(err) next(err);
    res.json('new User Created');
});
});


app.listen(3000 , function(err){

    if(err) throw err;

    console.log('Server is Running on port 3000');

});
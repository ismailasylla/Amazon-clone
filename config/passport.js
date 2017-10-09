var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy();


// serialize and deserialize
passport.serializeUser(function(user, done){
    done(null, user._id);
});


passport.deserializeUser(function(id, done){
    user.findById(id, function(err, user){
        done(err, user);
    });
});

// Middleware
passport.use('local-login', new LocalStrategy({
    usernameField: 'email',
    passportField: 'password',
    passReqToCallback: true,

}, (req, email, passport, done)=>{
    User.findOne({ email: email }, (err, user)=>{
        if(err){
            return done(err)
        }

        if(!user){
            return done(null, false, req.flash('loginMessage', 'No User Found!'));
        }

        if(!user.comparePassword(password)){
            return done(null, false, req.flash('loginMessage', 'Oops! Wrong Password!'))
        }

        return done(null, user);

    });
}));

// custom function to validate

exports.isAuthenticated = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}
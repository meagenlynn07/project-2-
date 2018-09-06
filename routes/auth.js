var authController = require('../controllers/authcontroller.js');
 
 
module.exports = function(app, passport) {
 
    app.get('/signup', authController.signup);
 
    app.get('/signin', authController.signin);
    //when you try to load a profile page without being logged in you will be redirected to the login page
    app.get('/dashboard',isLoggedIn, authController.dashboard);

    app.get('/logout',authController.logout);
    //routes for posting to signup
    app.post('/signup', passport.authenticate('local-signup', {
        //replace 'dashboard' with the user profile page
            successRedirect: '/dashboard',
 
            failureRedirect: '/signup'
        }
    ));
    //ROUTE FOR POSTING TO SIGNIN
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
 
        failureRedirect: '/signin'
    }
 
));
};

//custom middleware to protect the signin route
function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated())
     
        return next();
         
    res.redirect('/signin');
 
}
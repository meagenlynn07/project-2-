
//sign up
var exports = module.exports = {}
 exports.signup = function(req, res) {
     //replace 'signup' with handlebars registration page name
    res.render('signup');
 };
//sign in
 exports.signin = function(req, res) {
 
    res.render('signin');
 
};
//rendering user profile page
exports.dashboard = function(req, res) {
    res.render('dashboard');
 
};

//log-out controller
exports.logout = function(req, res) {
   req.session.destroy(function(err) {
        res.redirect('/');
 
    });
};
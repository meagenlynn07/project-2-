require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const exphbs = require('express-handlebars');

const distance = require('google-distance-matrix');
const passport = require('passport');
const session = require('express-session');
const hbs = exphbs.create({ /* config */ });

const db = require('./models');

const app = express();
const PORT = process.env.PORT || 3000;


// For Passport
app.use(session({ 
  secret: 'keyboard cat',
  resave: true, 
  saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));

path = require('path');
app.use(express.static(path.join(__dirname, '/')));

// Handlebars
app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    partialsDir: __dirname + '/views/partials'
  })
);
app.set('view engine', 'handlebars');

// Routes
require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

  //for passport
var authRoute = require('./routes/auth.js')(app,passport);

//load passport strategies
require('./config/passport/passport.js')(passport, db.user);
const syncOptions = {force: false};

// If running a test, set syncOptions.force to true
// clearing the `testdb`
if (process.env.NODE_ENV === 'test') {
  syncOptions.force = true;
}

// Starting the server, syncing our models ------------------------------------/
db.sequelize.sync(syncOptions).then(function() {
  app.listen(PORT, function() {
    console.log(
      '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
      PORT,
      PORT
    );
  });
});

module.exports = app;



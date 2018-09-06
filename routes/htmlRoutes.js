var db = require("../models");

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = function(app) {
  // Load search page page
  // Load 3 random sample cards
  //sample_vendor referring to handlebars call {{#if sample_vendor}}
  //Vendors referring to the name of the model
app.get("/", (req, res) => {
    db.Vendors.findById(randInt(1, 3)).then((vendor) => {
        res.render('index', { sample_vendor: vendor });
    });
});
//static log-in page
  app.get("/login", (req, res) => {
    res.render("login");
  });


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};

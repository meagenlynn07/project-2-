var db = require("../models");

module.exports = function(app) {
  // Get all Vendors
  app.get("/api/vendors", function(req, res) {
    db.Vendor.findAll({}).then(function(dbVendors) {
      res.json(dbVendors);
    });
  });

   // Search functionality
  app.get("/api/vendors/:category/:search", function(req, res) {
    let search = req.params.category.search;
    console.log(search);
    db.Vendor.findAll({
      where: {
        vendorType: req.params.category,
        [Sequelize.Op.or]: [
          {name:       {[Sequelize.Op.like]: '%' + search + '%'}},
          {description: {[Sequelize.Op.like]: '%' + search + '%'}},
        ]
      }
     
    }).then(function(dbVendors) {
      res.json(dbVendors);
    });
  });

  // Create a new Vendor
  app.post("/api/Vendors", function(req, res) {
    db.Vendor.create(req.body).then(function(dbVendor) {
      res.json(dbVendor);
    });
  });

  // Delete an Vendor by id
  app.delete("/api/Vendors/:id", function(req, res) {
    db.Vendor.destroy({ where: { id: req.params.id } }).then(function(dbVendor) {
      res.json(dbVendor);
    });
  });
};

var db = require("../models");

module.exports = function(app) {
  //display all vendors to the page
  app.get("/api/vendors", function(req, res) {
    db.Vendor.findAll({}).then(function(dbVendors) {
      res.json(dbVendors);
    });
  });

  app.get("/api/:vendorType/:search", function(req, res) {
    let search = req.params.vendorType.search;
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

  //search by vendor type
  app.get('/api/results/:vendorType', (req, res) => {
    Vendors.findById(req.params.vendorType).then(vendor => res.json(vendor));
  });

  //search by vendor price
  app.get('/api/results/:price', (req, res) => {
    Vendors.findById(req.params.price).then(vendor => res.json(vendor));
  });

  //create new vendor
  app.post('/api/vendors', (req, res) =>{
    const newVendor = req.body;
    Vendors.create(vendor).then(() => res.json({success: true }))
  });


  //logging newly created vendor (or a specific vendor)
  app.get('/api/vendors/:id', (req, res) => {
    Vendors.findById(req.params.vendorId).then(vendor => res.json(vendor));
  });
  //need to add post for new vendor with sequelize query to return the vendor WHERE ID = :id
  //post to vendor profile route

  //delete vendor profile
//   app.delete('/api/vendorProfile/:vendorId', (req, res) =>{
//     Vendors.destroy({ where: {id: req.params.vendorId}})
//       .then((affectedRows) => res.json(affectedRows));
//   });
// };
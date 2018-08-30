var db = require("../models");

module.exports = function (app) {

  //display all vendors to the page
  app.get('/api/vendors', (req, res) => {
    Vendors.findAll().then((vendors) => res.json(vendors));
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
  app.post('/api/newVendor', (req, res) =>{
    const newVendor = req.body;
    Vendors.create(vendor).then(() => res.json({success: true }))
  });
  //vendor Profile 
  app.get('/api/vendorProfile/:vendorId', (req, res) => {
    Vendors.findById(req.params.vendorId).then(vendor => res.json(vendor));
  });
  //delete vendor profile
  app.delete('/api/vendorProfile/:vendorId', (req, res) =>{
    Vendors.destroy({ where: {id: req.params.vendorId}})
      .then((affectedRows) => res.json(affectedRows));
  })
};









// Get all examples
  // app.get("/api/examples", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.json(dbExamples);
  //   });
  // });

  // // Create a new example
  // app.post("/api/examples", function(req, res) {
  //   db.Example.create(req.body).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

  // // Delete an example by id
  // app.delete("/api/examples/:id", function(req, res) {
  //   db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.json(dbExample);
  //   });
  // });

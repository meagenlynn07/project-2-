const db = require('../models');
var path = require("path");

module.exports = function (app) {

   // create new vendor
   app.post('/api/newVendor', (req, res) =>{
    const newVendor = req.body;
    console.log("newVendor: " ,newVendor);
    db.Vendor.create(newVendor).then(() => res.json({success: true , fullName:newVendor.fullName }))

  });

   // display all vendors to the page in json type
   app.get('/api/vendors', (req, res) => {
    db.Vendor.findAll().then((vendors) => res.json(vendors));
  });
  

    // display vendor Profile by ID
    app.get('/api/vendorProfile/:vendorId?', (req, res) => {
      db.Vendor.findById(req.params.vendorId).then(vendor => res.json(vendor));
    });

    //for login
    app.post('/api/login' , (req , res) =>{
      var loginInput = req.body;
      db.Vendor.findOne({
        where:{
          email:loginInput.email,
          password:loginInput.password
        }
      }).then(function(result){
        res.json({success: true , data:result});
      })
    });







  // search by vendor price
  app.get('/api/results/:price', (req, res) => {
    Vendors.findById(req.params.price).then(vendor => res.json(vendor));
  });

  // delete vendor profile
  app.delete('/api/vendorProfile/:vendorId', (req, res) =>{
    Vendors.destroy({where: {id: req.params.vendorId}})
      .then((affectedRows) => res.json(affectedRows));
  });
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

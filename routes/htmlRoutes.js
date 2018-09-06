var db = require("../models");
var path = require("path");

function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = function (app) {
    // Load search page page
    //sample_vendor referring to handlebars call {{#if sample_vendor}}
    //Vendors referring to the name of the model

    // app.get("/", (req, res) => {
    //     Vendors.findById(randInt(1, 3)).then((vendor) => {
    //         res.render('index', {sample_vendor: vendor});
    //     });
    // });

    app.get('/', (req, res) => {
      // Vendors.findAll().then((vendors) => res.json(vendors));
      res.sendFile(path.join(__dirname, "index.html"));
    });



    //static log-in page
    app.get("/login", (req, res) => {
      console.log("================================");
      res.render("login");
    });



    app.get("/hi", (req, res) => {
      console.log("================================");
      res.send("hiii")
    });
    

    app.get("/register", (req, res) => {
      res.render("register");
    });

    app.get("/vendors/:fullName", (req, res) => {

      var fullName = req.params.fullName;
      console.log("this is fullName: ", fullName);
      db.Vendor.findOne({
        where: {
          fullName: fullName
        }
      }).then(function (data) {
        var hbsObject = {
          title: "vendorInfo",
          vendorInfo: data
        };
        console.log(hbsObject);
        res.render("vendors", hbsObject);
      });
    });


    //for the pages which has not finished yet
    app.get('/workingOn', function (req, res) {
      console.log("================================");
      res.sendFile(path.join(__dirname, "../public/pages/maintenance.html"));
    });




      // search by vendor type
      app.get("/results/:searchInput", (req, res) => {
        console.log("=================================");
        console.log("searchInput: " , req.params.searchInput);
        var photographer_1 = req.params.searchInput;
        console.log("what is this: " ,typeof(photographer_1));
        db.Vendor.findAll({
          where: {
            vendorType:photographer_1
          }
        }).then(function (data) {
          console.log(typeof(data) , data);
          if(data == {} || data == [] || data == "" || data == null){
            res.json({seccess:false});
          }else{
            res.json({seccess:true , dataInfo: data});
          }
          // console.log("hiiiii: " , data)
            // res.json({
            //   success: true,
            //   data: data
            // })
            //  res.redirect()
         
            // console.log(searchData);
            // res.render("search" , searchData);
            // res.redirect("/results/photographer");
          }
        );
      });


      //search by vendor type
      app.get("/show/:vendorType" , function(req , res){
        console.log("searchInput: " , req.params.vendorType);
        db.Vendor.findAll({
          where: {
            vendorType:req.params.vendorType
          }
        }).then(function (data) {
          var searchData = {
            title:"search result",
            searchResult:data
          };
          console.log(data);
        res.render("search" , searchData);
      })

    });




       // test for search by vendor type
       app.get("/results/photographer", (req, res) => {
        // console.log("searchInput: " , req.params.searchInput);
        var photographer_1 = "photographer";
        db.Vendor.findAll({
          where: {
            vendorType:photographer_1
          }
        }).then(function (data) {
          // console.log("hiiiii: " , data)
            // res.json({
            //   success: true,
            //   data: data
            // })
            //  res.redirect()
            var searchData = {
              title:"search result",
              searchResult:data
            };
            console.log(searchData);
            res.render("search" , searchData);
            // res.redirect("/login");
          }
        );
      });









    // Render 404 page for any unmatched routes
    app.get("*", function (req, res) {
      res.render("404");
    });


    };


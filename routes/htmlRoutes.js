var db = require("../models");
var path = require("path");


function randInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = function (app) {
    
   
    app.get('/', (req, res) => {
      // Vendors.findAll().then((vendors) => res.json(vendors));
      //res.sendFile(path.join(__dirname, "main.handlebars"));
      res.render("index",
      {
        title: 'Home'
      });
    });

  //home
  app.get("/home", (req, res) => {
    console.log("index handlebars");
    res.render('index', {
      title: 'Home'
    });
  });


  //login
    app.get("/login", (req, res) => {
      console.log("login handlebars");
      res.render('login', {
        title: 'Login',
        // stylesheet: 'login',
        // script: 'login'
      });
    });

//register
  app.get("/register", (req, res) => {
    console.log("register handlebars");
    res.render('register', {
        title: 'Register',
      });
  });

//register
app.get("/register", (req, res) => {
  console.log("gallery handlebars");
  res.render("gallery");
});



    app.get("/hi", (req, res) => {
      console.log("HI");
      res.send("hiii")
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
      app.get("/results/:vendorType/:searchInput", (req, res) => {
 
        console.log("=================================");
        console.log("searchInput: " , req.params.searchInput);
        var searchTerm = req.params.searchInput;
        var vendorType = req.params.vendorType;
        console.log("what is this: " ,typeof(searchTerm));
        db.Vendor.findAll({
          where: {
            vendorType:vendorType,
            description: {
             $like: '%searchInput%'
            }

          }
        }).then(function (data) {
          console.log(typeof(data) , data);
          if(data == {} || data == [] || data == "" || data == null){
            res.json({success:false});
          }else{
            res.json({success:true , dataInfo: data});
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
        console.log("vendorType: " , req.params.vendorType);
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
       app.get("/results/photographers", (req, res) => {
        // console.log("searchInput: " , req.params.vendorType);
        var vendorType = "photographer";
        db.Vendor.findAll({
          where: {
            vendorType:vendorType
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


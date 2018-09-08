var bCrypt = require("bcrypt-nodejs");

module.exports = function (passport, user) {
  var User = user;
  var LocalStrategy = require("passport-local").Strategy;

  //LOCAL SIGNUP
  passport.use(
    "local-signup",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },
      function (req, email, password, done) {
        const User = user;
        const isValidPassword = (userPass, pass) => bCrypt.compareSync(pass, userPass);

        // function generateHash(password) {
        //   return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
        // }

        User.findOne({
          where: {
            email: email
          }
        })
          .then((user) => {
            if (!user) return done(null, false, { message: 'Email does not exist' });
            if (!isValidPassword(user.password, password))
              return done(null, false, { message: 'Incorrect Password' });

            const userInfo = user.get();
            return done(null, userInfo);
          })
          .catch((err) => {
            console.error(err);
            return done(null, false, { message: 'Something went wrong' });
          });
      }
    )
  );

  //       }).then(function(user) {
  //         if (user) {
  //           return done(null, false, {
  //             message: "That username is already taken"
  //           });
  //         } else {
  //           var userPassword = generateHash(password);

  //           var data = {
  //             username: username,
  //             password: userPassword
  //           };

  //           User.create(data).then(function(newUser, created) {
  //             if (!newUser) {
  //               return done(null, false);
  //             }

  //             if (newUser) {
  //               return done(null, newUser);
  //             }
  //           });
  //         }
  //       });
  //     }
  //   )
  // );

  //LOCAL SIGNIN
  passport.use(
    "local-signin",
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        passReqToCallback: true // allows us to pass back the entire request to the callback
      },

      function (req, email, password, done) {
        const generateHash = (pass) => bCrypt.hashSync(pass, bCrypt.genSaltSync(8), null);

                User.findOne({
                    where: {
                        email: email	
                    }
                }).then((user) => {
                    if (user) {
                        return done(null, false, { message: 'That email is already taken' });
                    }

                    const userPassword = generateHash(password);
                    const data = {
                        email: email,
                        password: userPassword,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname
                    };

                    User.create(data).then((newUser, created) => {
                        if (!newUser) return done(null, false);

                        return done(null, newUser);
                    });
                });
            }
        )
    );

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((id, done) =>
        User.findById(id).then((user) => (user ? done(null, user.get()) : done(user.errors, null)))
    );
};


//         var isValidPassword = function (userpass, password) {
//           return bCrypt.compareSync(password, userpass);
//         };

//         User.findOne({
//           where: {
//             username: username
//           }
//         })
//           .then(function (user) {
//             if (!user) {
//               return done(null, false, {
//                 message: "Username does not exist"
//               });
//             }
//             console.log(user.password);
//             if (!isValidPassword(user.password, password)) {
//               return done(null, false, {
//                 message: "Incorrect password."
//               });
//             }

//             var userinfo = user.get();
//             return done(null, userinfo);
//           })
//           .catch(function (err) {
//             console.log("Error:", err);

//             return done(null, false, {
//               message: "Something went wrong with your Signin"
//             });
//           });
//       }
//     )
//   );

//   //serialize
//   passport.serializeUser(function (user, done) {
//     done(null, user.id);
//   });

//   //deserialize user
//   passport.deserializeUser(function (id, done) {
//     User.findById(id).then(function (user) {
//       if (user) {
//         done(null, user.get());
//       } else {
//         done(user.errors, null);
//       }
//     });
//   });
// };
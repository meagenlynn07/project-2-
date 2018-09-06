// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };


//if we were to do a seperate login model:


module.exports = (sequelize, DataTypes) => {
  var Login = sequelize.define('Login', {
    
      EmailAddress: {
          type: DataTypes.STRING,
          isEmail: true,
          allowNull:false,
          validate: {
            len: [1]
          }
      },
      password: {
          type: DataTypes.STRING,
          allowNull:false,
          validate: {
            len: [1]
          }
      },
  }
);

//   Login.associate = function(models) {
//     Login.belongsTo(models.vendors, {
//         foreignKey: 'vendor_id',
//         onDelete: 'CASCADE',
//     });
// };

return Login;
};

// on the vendor model
//   Vendors.associate = function(models){
//       Vendors.hasOne(models.login, {
//         foreignKey: 'vendor_id',
//         as: 'loginDetails'
//       });
// };
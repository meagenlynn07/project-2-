module.exports = function(sequelize, DataTypes) {
  var Example = sequelize.define("Example", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT
  });
  return Example;
};


//if we were to do a seperate login model:
module.exports = (sequelize, DataTypes) => {
  var Login = sequelize.define('login', {
      user_id: {
          type: DataTypes.INTEGER
      },
      username: {
          type: DataTypes.STRING(500),
          isEmail: true
      },
      password: {
          type: DataTypes.STRING(500)
      },
      vendor_id: {
          type: DataTypes.INTEGER
      }
  }, {
      underscored: true,
      freezeTableName: true
  });

  Login.associate = function(models) {
      Login.belongsTo(models.vendors, {
          foreignKey: 'vendor_id',
          onDelete: 'CASCADE'
      });
  };
  
  return Login;

  //on the vendor model
  Vendors.associate = function(models) {
      Vendors.hasOne(models.login, {
        foreignKey: 'vendor_id',
        as: 'loginDetails'
      });

    };
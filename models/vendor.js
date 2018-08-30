module.exports = function(sequelize, DataTypes) {
    const Vendor = sequelize.define("vendor", {
        vendor_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name : DataTypes.STRING,
        vendorType : DataTypes.STRING,
        description : DataTypes.TEXT,
        website: {
            type: DataTypes.STRING,
            validate: {
                isUrl : true
            }
        },
        email: {
            type: DataTypes.STRING,
            isUnique :true,
            allowNull:false,
            validate: {
                isEmail : true
            }
        },
        zip: {
            type: DataTypes.INTEGER,
            validate: {
                len: [5, 5]
            }
        },
        username: {
            type: DataTypes.STRING,
            isUnique :true,
            allowNull:false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        {
            hooks: {
              beforeCreate: (vendor, options) => {
                return hashPassword(vendor.password).then(hashedPw => {
                    vendor.password = hashedPw;
                  });
              }
            }      
    //     instanceMethods: {
    //       generateHash: function (password) {
    //         return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
    //       },
    //       validPassword: function (password) {
    //         return bcrypt.compareSync(password, this.password)
    //       }
    //     }
        }
        
    });
   
    return Vendor;
  };
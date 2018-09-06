module.exports = function(sequelize, DataTypes) {
    const Vendor = sequelize.define("Vendor", {
        // vendor_id: {
        //     type: DataTypes.INTEGER,
        //     autoIncrement: true,
        //     allowNull: false,
        //     primaryKey: true
        // },

        firstName:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
          },
        lastName:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                len:[1]
            }
          },
        vendorType :{
              type:DataTypes.STRING,
              allowNull:false,
              validate:{
                  len:[1]
              }
          },
        description :{
            type:DataTypes.TEXT,
            // allowNull:false,
            // validate:{
            //     len:[1]
            // }
        },
        // website: {
        //     type: DataTypes.STRING,
        //     validate: {
        //         isUrl : true
        //     }
        // },
        email: {
            type: DataTypes.STRING,
            isUnique :true,
            allowNull:false,
            validate: {
                isEmail : true
            }
        },
        State:{
            type: DataTypes.STRING,
            // isUnique :true,
            allowNull:false
        },
        City:{
            type: DataTypes.STRING,
            // isUnique :true,
            allowNull:false

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
            validate: {
                len: [1]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
            // hooks: {
            //   beforeCreate: (vendor, options) => {
            //     return hashPassword(vendor.password).then(hashedPw => {
            //         vendor.password = hashedPw;
            //       });
            //   }
            // }      
        
    });
    return Vendor;
  };
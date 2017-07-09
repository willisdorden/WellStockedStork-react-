

 const bcrypt = require('bcrypt');

module.exports = function(sequelize, DataTypes) {
    const Users = sequelize.define("Users", {
            // Giving the Account model a name of type STRING
            first_name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1, 20],
                    notEmpty: true

                }
            },

            last_name:{
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    len: [1, 20],
                    notEmpty: true
                }
            },

            email: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail:{
                        args: true,
                        msg:"email is not valid"
                    }
                }
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false

            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique:{ args: true,
                    msg:"username has been used"
                },
                validate: {
                    len: [1, 20],
                    isLowercase: true,
                    notEmpty: true
                }
            }
        },

        {

            // Here we'll pass a second "classMethods" object into the define method
            // This is for any additional configuration we want to give our models

            // We're saying that we want our Account to have Posts
            classMethods: {
                associate: function (models) {
                    // Associating Account  with profile
                    // When an Account is deleted, also delete any associated profile
                    Account.hasOne(models.Profile, {
                        foreignKey: "AccountId",
                        onDelete: "cascade"
                    });

                },
                generateHash: function (password) {
                    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
                },
                validPassword: function (password,storedPassword) {
                     const isvalid = storedPassword ? bcrypt.compareSync(password,storedPassword) : false;
                    return isvalid;
                }
            },
            underscored: true,
        });


    return Users;
};

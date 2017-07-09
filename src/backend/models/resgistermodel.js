
module.exports = function(sequelize, DataTypes) {
    var registermodel = sequelize.define("Register", {
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20],
                isLowercase: true,
                notEmpty: true
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 20],
                isLowercase: true,
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


    });
    return registermodel;
};

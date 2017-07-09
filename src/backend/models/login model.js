

module.exports = function(sequelize, DataTypes) {
    var loginmodel = sequelize.define("burgers", {
        Email: {
            type: DataTypes.STRING,
            notNull: true,
            validate: {
                len: [1, 140]

            }
        },
        Password:{ type: DataTypes.BOOLEAN,
            defaultValue:false
        },
        date:{
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW }

    });
    return loginmodel;
};
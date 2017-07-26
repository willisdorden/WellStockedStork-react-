

module.exports = function(sequelize, DataTypes) {
    const Ecomoms = sequelize.define("Ecomoms", {
        callId:{
            type: DataTypes.BOOLEAN
        },
        name: {
            type: DataTypes.TEXT
        },
        category: {
            type: DataTypes.TEXT
        },
        description: {
            type: DataTypes.TEXT
        },
        ImgUrl: {
            type: DataTypes.TEXT
        },
        buyUrl:{
            type: DataTypes.TEXT
        }


    });
    return Ecomoms;
};

module.exports = function(sequelize, DataTypes) {
    const Chicmoms= sequelize.define("Chicmoms", {
        name: {
            type: DataTypes.STRING
        },
        category: {
            type: DataTypes.BOOLEAN
        },
        description: {
            type: DataTypes.STRING
        },
        ImgUrl: {
            type: DataTypes.STRING
        },
        buyUrl:{
            type: DataTypes.STRING
        }


    });
    return Chicmoms;
};
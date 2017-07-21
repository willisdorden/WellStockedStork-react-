

module.exports = function(sequelize, DataTypes) {
    const Practicalmoms = sequelize.define("Practicalmoms", {
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
    return Practicalmoms;
};

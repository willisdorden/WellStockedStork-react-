

module.exports = function(sequelize, DataTypes) {
    const Practicalmoms = sequelize.define("Practicalmoms", {
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
    return Practicalmoms;
};

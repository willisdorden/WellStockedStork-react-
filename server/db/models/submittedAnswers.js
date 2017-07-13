
module.exports = function(sequelize, DataTypes) {
    const submittedAnswers = sequelize.define("submittedAnswers", {
        userAnswer: {
            type: DataTypes.JSON,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                submittedAnswers.belongsTo(models.Users, {
                    foreignKey: 'UsersId',
                    allowNull: true
                });
            }
        },
        underscored: true,
    });
    return submittedAnswers;
};
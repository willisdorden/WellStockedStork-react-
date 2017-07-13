module.exports = function(sequelize, DataTypes) {
    const surveyAnswers = sequelize.define("surveyAnswers", {
        body: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    }, {
        classMethods: {
            associate: function(models) {
                surveyAnswers.belongsTo(models.surveyQuestions, {
                    foreignKey: 'SurveyQuestionId',
                    allowNull: true

                });

            }
        },
        underscored: true,
    });
    return surveyAnswers;
};
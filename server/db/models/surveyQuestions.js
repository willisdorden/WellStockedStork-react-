module.exports = function(sequelize, DataTypes) {
    const surveyQuestions = sequelize.define("surveyQuestions", {
        question: {
            type: DataTypes.STRING
        }
    }, {
        classMethods: {
            associate: function(models) {
                surveyQuestions.hasMany(models.surveyAnswers, {
                    foreignKey: 'SurveyQuestionId',
                    onDelete: "cascade"
                });

            }
        },
        underscored: true,
    });
    return surveyQuestions;
};
module.exports = function(sequelize, DataTypes) {
    const surveyQuestions = sequelize.define("surveyQuestions", {
        question: {
            type: DataTypes.STRING
        },
        callId:{
            type: DataTypes.BOOLEAN
        },
    });

            surveyQuestions.associate= function(models) {
                surveyQuestions.hasMany(models.surveyAnswers, {
                    foreignKey: {
                        name: 'SurveyQuestionId',
                        foreignKeyConstraint: true,
                        onDelete: "cascade"
                    },
                });
            };

    return surveyQuestions;
};
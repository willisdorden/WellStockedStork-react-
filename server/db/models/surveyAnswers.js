module.exports = function(sequelize, DataTypes) {
    const surveyAnswers = sequelize.define("surveyAnswers", {
        body: {
            type: DataTypes.STRING(1000),
            allowNull: false
        },
        value: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    });


    surveyAnswers.associate = function (models) {
        surveyAnswers.belongsTo(models.surveyQuestions, {
            foreignKey: {
                name: 'SurveyQuestionId',
                foreignKeyConstraint: true,
                allowNull: false
            },
        });

    };

    return surveyAnswers;
};



module.exports = {
    up: function (queryInterface, Sequelize) {

        queryInterface.bulkInsert('surveyQuestions', [{
            id:1,
            question: "Which of the following statements applies to you when grocery shopping for your family? " ,
            callID:1,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },  {
            id:2,
            question: "It’s date night and your partner lets you pick the restaurant for dinner. Which of the following do you choose: ",
            callID:1,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
    },{
            id:3,
            question: "How often do you purchase clothing for your family?",
            callID:1,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            id:4,
            question: "When it comes to technology (cell phones, flat screens, laptops, etc), which of the below best describes you: ",
            callID:1,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            id:5,
            question: "How would you describe your relationship with make-up?",
            callID:1,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            id:6,
            question: "What does your dream nursery look like?  ",
            callID:1,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            id:7,
            question: "What do you envision most when you think of your preferred method of transporting your newborn?  ",
            callID:1,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            id:8,
            question: "You’re in charge of planning this year’s family vacation … where do you go? ",
            callID:1,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            id:9,
            question: "When it comes to toys for your kid(s):  ",
            callID:1,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        },{
            id:10,
            question: "NOT RELATED TO MOM “TYPE”: What is your plan for feeding your newborn?",
            callID:1,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('surveyQuestions');
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.
         Example:
         return queryInterface.bulkDelete('Person', null, {});
         */
    }
};
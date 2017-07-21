

module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.bulkInsert('surveyAnswers', [{
            body: "I buy mostly organic and prefer to shop local when possible",
            value:1,
            SurveyQuestionId:1,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        }, {
            body:"I buy name brand; no knock off cereals for us",
            value:2,
            SurveyQuestionId:1,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        }, {
            body:"I buy what’s in season and on sale",
            value:3,
            SurveyQuestionId:1,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            body:"The new locally owned farm-to-table restaurant in town",
            value:1,
            SurveyQuestionId:2,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            body: "The snazziest steak house around; the new chef has been getting rave reviews",
            value:2,
            SurveyQuestionId:2,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        }, {
            body:"Your go-to chain restaurant – you know what you like and the menu is familiar and reliable",
            value:3,
            SurveyQuestionId:2,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        },{
            body:"Only seasonally, and I buy just what we need – I often shop consignment stores",
            value:1,
            SurveyQuestionId:3,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            body: "Whenever I see something cute and stylish",
            value:2,
            SurveyQuestionId:3,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        }, {
            body:"Seasonally and for special occasions, but I wait until my favorite stores are offering deals or promotions",
            value:3,
            SurveyQuestionId:3,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        },{
            body:"Less is more",
            value:1,
            SurveyQuestionId:4,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            body: "Give me the latest and greatest",
            value:2,
            SurveyQuestionId:4,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        }, {
            body:"I’m happy with my current smart phone and TV; no need to upgrade until they break",
            value:3,
            SurveyQuestionId:4,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        },{
            body:"I hardly wear make-up; maybe a bit of mascara and lip gloss",
            value:1,
            SurveyQuestionId:5,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            body: "I have a bathroom full of products and love to experiment with new looks",
            value:2,
            SurveyQuestionId:5,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        }, {
            body:"I go for the basics: foundation, blush, eyeshadow, mascara and lip color, but rarely try extravagant styles",
            value:3,
            SurveyQuestionId:5,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        },{
            body:"A simple set up; vintage pieces with history and charm would be ideal",
            value:1,
            SurveyQuestionId:6,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            body: "Themed and fully decked out, with matching furniture, mobiles, blankets and artwork",
            value:2,
            SurveyQuestionId:6,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        }, {
            body:"Practical with all the necessities but few frills",
            value:3,
            SurveyQuestionId:6,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        },{
            body:"I’ll wear him in a sling or infant carrier, keeping him close",
            value:1,
            SurveyQuestionId:7,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            body: "Give me the fanciest stroller on the market – I want her to look good traveling in style",
            value:2,
            SurveyQuestionId:7,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        }, {
            body:"As long as it gets my baby from point A to B, I’m not picky ",
            value:3,
            SurveyQuestionId:7,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        },{
            body:"Camping in the woods, the closer to nature, the better",
            value:1,
            SurveyQuestionId:8,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            body: "Paris, London on New York – somewhere to do some serious shopping, sightseeing and shows",
            value:2,
            SurveyQuestionId:8,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        }, {
            body:"Walt Disney World, but only after finding the best deals from your local travel agent or by scouring the internet",
            value:3,
            SurveyQuestionId:8,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        },{
            body:"I like simplicity; blocks are great!",
            value:1,
            SurveyQuestionId:9,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            body: "I am happy to buy the trendiest toys if it makes my little one(s) happy",
            value:2,
            SurveyQuestionId:9,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        }, {
            body:"I sometimes splurge on big items for birthdays and holidays, but don’t want too much “stuff” ",
            value:3,
            SurveyQuestionId:9,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        },{
            body:"100% breastfeeding",
            value:1,
            SurveyQuestionId:10,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')
        }, {
            body: "I’ll try breastfeeding but I’m not opposed to formula",
            value:2,
            SurveyQuestionId:10,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        }, {
            body:"All formula from the start",
            value:3,
            SurveyQuestionId:10,
            created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
            updated_at: Sequelize.literal('CURRENT_TIMESTAMP')

        }]);
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('surveyAnswers');
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.
         Example:
         return queryInterface.bulkDelete('Person', null, {});
         */
    }
};

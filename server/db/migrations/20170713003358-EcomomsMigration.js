
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Ecomoms', {
            name: {
                type: Sequelize.TEXT,
                allowNull:false
            },
            category: {
                type: Sequelize.TEXT,
                allowNull: false,

            },
            description: {
                type: Sequelize.TEXT,
                allowNull: false
            },

            imgUrl: {
                type: Sequelize.TEXT,
                allowNull: false,
            },
            buyUrl:{
                type:Sequelize.TEXT
            },
            created_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('NOW()')

            },
            updated_at: {
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP')

            }


        })
        /*
         Add altering commands here.
         Return a promise to correctly handle asynchronicity.
         Example:
         return queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Ecomoms');
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.
         Example:
         return queryInterface.dropTable('users');
         */
    }
};
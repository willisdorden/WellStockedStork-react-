
module.exports = {
    up: function (queryInterface, Sequelize) {
        return queryInterface.createTable('Chicmoms', {
            name: {
                type: Sequelize.STRING,
                primaryKey: true,
                autoIncrement: true
            },
            category: {
                type: Sequelize.STRING,
                allowNull: false,

            },
            description: {
                type: Sequelize.STRING,
                allowNull: false
            },
            imgUrl: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            buyUrl:{
                type:Sequelize.STRING
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
        return queryInterface.dropTable('Chicmoms');
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.
         Example:
         return queryInterface.dropTable('users');
         */
    }
};

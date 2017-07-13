
module.exports = {
    up: function (queryInterface, Sequelize) {
        queryInterface.createTable('Users', {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            first_name: {
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    len: [1, 20],
                    notEmpty: true
                }
            },
            last_name:{
                type: Sequelize.STRING,
                allowNull: false,
                validate: {
                    len: [1, 20],
                    notEmpty: true
                }
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
                validate: {
                    isEmail: {
                        args: true,
                        msg: "email is not valid"
                    }
                }
            },

            password: {
                type: Sequelize.STRING,
                allowNull: false

            },
            username: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: {
                    args: true,
                    msg: "username has been used"
                },
                validate: {
                    len: [1, 20],
                    isLowercase: true,
                    notEmpty: true
                }
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
    },

    down: function (queryInterface, Sequelize) {
        return queryInterface.dropTable('Users');
        /*
         Add reverting commands here.
         Return a promise to correctly handle asynchronicity.
         Example:
         return queryInterface.dropTable('users');
         */
    }
};

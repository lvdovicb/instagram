'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER, 
        unique: true
      },
      title: {
         allowNull: false,
        type: Sequelize.STRING
      },
      image: {
         allowNull: false,
        type: Sequelize.STRING
      },
      comment: {
         allowNull: false,
        type: Sequelize.STRING
      },
      userId: {
          references: {
          model: "Users",
          key: "id"
        },
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Posts');
  }
};
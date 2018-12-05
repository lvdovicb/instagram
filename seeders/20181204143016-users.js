'use strict';

var models = require('../models')
var bcrypt = require('bcrypt')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let users = [];
   
    for (var i = 0; i <15; i++) {
      users.push({
        name: `JeanDough${i}`, 
        email: `jeandough${i}@yopmail.com`, 
        password: bcrypt.hashSync(`password${i+1}`, 12),
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }
    return queryInterface.bulkInsert('Users', users, {})
  },
 

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('Users', null, {});
   
  }
};

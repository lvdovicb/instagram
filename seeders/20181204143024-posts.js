
'use strict';
var models = require('../models')
var randomSentence = require('random-sentence')

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    
  return models.Users.findAll().then(function (users) {
     
    let posts = []     
      for (var index = 0; index < users.length; index++) {
        const i = 200+users[index].id
        const picture = `https://picsum.photos/${i}`
        posts.push({
          title: randomSentence({min: 4, max: 30}),
          comment: randomSentence({min: 4, max: 60}),
          image: picture,
          userId: users[index].id, 
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }  
      return queryInterface.bulkInsert('Posts', posts , {})
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Posts', null, {});
  }
};

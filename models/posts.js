'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    // id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    comment: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Posts.associate = function(models) {
    Posts.belongsTo(models.Users, {foreignKey: "id"});
  };
  return Posts;
};
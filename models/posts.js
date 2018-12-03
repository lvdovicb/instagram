'use strict';
module.exports = (sequelize, DataTypes) => {
  const Posts = sequelize.define('Posts', {
    PostId: DataTypes.INTEGER,
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    comment: DataTypes.STRING,
    UserId: DataTypes.INTEGER
  }, {});
  Posts.associate = function(models) {
    Posts.belongsTo(models.Users);
  };
  return Posts;
};
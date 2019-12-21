'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define('Comment', {
    comment: DataTypes.TEXT,
    is_published: DataTypes.BOOLEAN,
    is_archived: DataTypes.BOOLEAN,
    article_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {});
  Comment.associate = function(models) {
    // associations can be defined here
    Comment.belongsTo(models.Article, {
      foreignKey:'article_id',
      as: 'Article', 
      sourceKey:'id'
    })
    Comment.belongsTo(models.User, {
      foreignKey:'user_id',
      as: 'User', 
      sourceKey:'id'
    })
  };
  return Comment;
};
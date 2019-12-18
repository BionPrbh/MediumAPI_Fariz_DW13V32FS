'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    fullname: DataTypes.STRING,
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Article, {as: 'articles', foreignKey: 'author_id'})  };
  return User;
};
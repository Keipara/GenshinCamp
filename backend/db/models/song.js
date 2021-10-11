'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    songFile: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Song.associate = function(models) {
    Song.hasMany(models.Comment, {foreignKey: 'songId'})
    Song.belongsTo(models.User, {foreignKey: 'userId'})
  };
  return Song;
};

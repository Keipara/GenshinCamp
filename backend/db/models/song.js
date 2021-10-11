'use strict';
module.exports = (sequelize, DataTypes) => {
  const song = sequelize.define('song', {
    title: DataTypes.STRING,
    songFile: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  song.associate = function(models) {
    // associations can be defined here
  };
  return song;
};
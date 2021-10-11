'use strict';
module.exports = (sequelize, DataTypes) => {
  const playlist = sequelize.define('playlist', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  playlist.associate = function(models) {
    // associations can be defined here
  };
  return playlist;
};
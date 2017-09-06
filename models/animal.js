'use strict';
module.exports = function(sequelize, DataTypes) {
  var Animal = sequelize.define('Animal', {
    species: DataTypes.STRING,
    isWearingHat: DataTypes.BOOLEAN,
    isAgressive: DataTypes.BOOLEAN,
    name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Animal;
};
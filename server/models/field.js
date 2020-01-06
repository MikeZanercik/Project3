'use strict';

module.exports = (sequelize, DataTypes) => {
  const Field = sequelize.define('Field', {
    name: {
      type: DataTypes.STRING,
      unique: true
    }
  }, {});

  Field.associate = function (models) {
    // associations can be defined here
    
  };


  return Field;
};
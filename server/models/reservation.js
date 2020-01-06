'use strict';

module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    date: DataTypes.DATE
  }, {});

  Reservation.associate = function (models) {
    // associations can be defined here 
    Reservation.belongsTo(models.User, { foreignKey: 'UserId' })
    Reservation.belongsTo(models.Field, { foreignKey: 'FieldId' })
  };

  return Reservation;
};
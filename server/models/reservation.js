'use strict';

module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    date: {
      // new Date()
      // moment("12/25", "MM/DD").format()
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
  }, {});

  Reservation.associate = function (models) {
    // associations can be defined here 
    Reservation.belongsTo(models.User, { foreignKey: 'UserId', targetKey: 'id' })
    Reservation.belongsTo(models.Field, { foreignKey: 'FieldsId', targetKey: 'id' })
  };

  return Reservation;
};
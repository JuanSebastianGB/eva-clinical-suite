'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Calibration extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Calibration.init({
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    file: DataTypes.STRING,
    device_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Calibration',
  });
  return Calibration;
};
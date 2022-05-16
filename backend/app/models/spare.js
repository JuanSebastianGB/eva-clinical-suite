'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Spare extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Spare.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    device_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Spare',
  });
  return Spare;
};
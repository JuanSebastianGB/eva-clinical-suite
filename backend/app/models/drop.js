'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Drop extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Drop.init({
    file: DataTypes.STRING,
    description: DataTypes.STRING,
    date: DataTypes.DATE,
    device_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Drop',
  });
  return Drop;
};
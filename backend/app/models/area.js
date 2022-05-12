'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Area.belongsTo(models.Service, { as: 'service', foreignKey: 'service_id' });
    }
  }
  Area.init({
    name: DataTypes.STRING,
    service_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Area',
  });
  return Area;
};
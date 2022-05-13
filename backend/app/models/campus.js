'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Campus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Campus.hasMany(models.Service);
    }
  }
  Campus.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Campus',
  });
  return Campus;
};
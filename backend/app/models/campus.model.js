export const campusModel = (sequelize, Sequelize) => {
  const Campus = sequelize.define("campus", {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    name: {
      type: Sequelize.STRING(120),
      allowNull: false
    }
  });

  return Campus;
};

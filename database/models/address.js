'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Address.belongsTo(models.User,{
        foreignKey: "userId",
        as: "user",
        onDelete: "CASCADE",
      })
    }
  }
  Address.init({
    Province: DataTypes.STRING,
    District: DataTypes.STRING,
    Cell: DataTypes.STRING,
    Street: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Address',
  });
  return Address;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Prize extends Model {
    static associate(models) {
    }
  };
  Prize.init({
    title: DataTypes.STRING,
    desc: DataTypes.TEXT,
    img: DataTypes.STRING,
    shot: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Prize',
  });
  return Prize;
};
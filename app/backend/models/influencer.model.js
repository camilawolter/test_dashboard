const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Influencer = sequelize.define('influencer', {
  name: {
    type: DataTypes.STRING,
    allowNull: false 
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false
  },
  subscribers: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  platform: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Influencer;

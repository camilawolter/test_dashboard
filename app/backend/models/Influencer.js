const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Influencer = sequelize.define(
    'Influencer', 
    {
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
      },
      timestamps: false,
      underscored: true,
      tableName: 'users'
    });
    
    return Influencer;
}


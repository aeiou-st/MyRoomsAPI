"use strict";
module.exports = {
  up: async function (queryInterface, DataTypes) {
    await  queryInterface.createTable("users", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        full_name: {
          type: DataTypes.STRING(200),
        },
        email: {
          type: DataTypes.STRING(50),
        },
        phone_number: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
        role_id:{
          type:DataTypes.INTEGER
        },
        latitudes:{
            type:DataTypes.DECIMAL(8,6),
        },
        longitudes:{
            type:DataTypes.DECIMAL(9,6),
        },
        createdAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: DataTypes.DATE,
        },
      })

  },
   down:async function (queryInterface,DataTypes) {
     queryInterface.dropTable("users")
  },
};

"use strict";
module.exports = {
  up: async function (queryInterface, DataTypes) {
    await  queryInterface.createTable("roles", {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        role_name: {
          type: DataTypes.STRING(200),
        },
        status: {
          type: DataTypes.STRING(50),
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
     queryInterface.dropTable("roles")
  },
};

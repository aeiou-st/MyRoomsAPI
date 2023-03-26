"use strict";
module.exports = {
  up: async function (queryInterface, DataTypes) {
    await queryInterface.createTable("room_types", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      room_type_name: {
        type: DataTypes.STRING(200),
      },
      image: {
        type: DataTypes.STRING
      },
      order: {
        type: DataTypes.INTEGER
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
  down: async function (queryInterface, DataTypes) {
    await queryInterface.dropTable("room_types")
  },
};

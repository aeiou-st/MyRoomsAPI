import sequelize, { Sequelize } from "sequelize";
import path from "path";
const { DataTypes, Model } = require("sequelize");
const COVER_IMAGE = process.env.COVER_IMAGE

class RoomDetails extends Model {
  static init(sequelize: Sequelize) {
    super.init(
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER,
        },
        user_id: {
          type: DataTypes.INTEGER,
        },
        room_type_id: {
          type: DataTypes.INTEGER,
        },
        room_cover_image: {
          type: DataTypes.STRING(50),
          get(this: RoomDetails) {
            return (COVER_IMAGE + this.getDataValue("room_cover_image"));
          },
        },
        address_1: {
          type: DataTypes.STRING(100),
        },
        address_2: {
          type: DataTypes.STRING(100),
        },
        bethroom: {
          type: DataTypes.INTEGER,
        },
        room: {
          type: DataTypes.INTEGER,
        },
        about: {
          type: DataTypes.TEXT,
        },
        monthly_amount: {
          type: DataTypes.INTEGER,
        },
        deposite_amount: {
          type: DataTypes.INTEGER,
        },
      },
      {
        modelName: "room_details",
        sequelize,
      }
    );
  }

  static associate(models: any) { }
}

export { RoomDetails };

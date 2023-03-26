import sequelize, { Sequelize } from "sequelize";
import path from "path";
const { DataTypes, Model } = require("sequelize");
const ROOM_TYPE_IMAGE = process.env.ROOM_TYPE_IMAGE

class RoomType extends Model {
  static init(sequelize: Sequelize) {
    super.init(
      {
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
          type: DataTypes.STRING(50),
          get(this: RoomType) {
            return (ROOM_TYPE_IMAGE + this.getDataValue("image"));
          },
        },
        order: DataTypes.INTEGER,
      },
      {
        modelName: "room_types",
        sequelize,
      }
    );
  }

  static associate(models: any) { }
}

export { RoomType };

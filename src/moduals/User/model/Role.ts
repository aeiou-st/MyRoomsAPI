import sequelize, { Sequelize } from "sequelize";
import path from "path";
const { DataTypes, Model } = require("sequelize");

class Role extends Model {
  static init(sequelize: Sequelize) {
    super.init(
      {
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
      },
      {
        modelName: "roles",
        sequelize,
      }
    );
  }

  static associate(models: any) {
  }
}

export { Role };

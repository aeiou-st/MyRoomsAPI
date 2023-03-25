import sequelize, { Sequelize,Association } from "sequelize";

const { DataTypes, Model } = require("sequelize");

class User extends Model {
  static init(sequelize: Sequelize) {
    super.init(
      {
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
        role_id: {
          type: DataTypes.STRING(100),
        },
        latitudes: {
          type: DataTypes.DECIMAL(8, 6),
        },
        longitudes: {
          type: DataTypes.DECIMAL(9, 6),
        },
      },
      {
        modelName: "users",
        sequelize,
      }
    );
  }

  static associate(model: any) {
      // this.hasOne(model.roles, {foreginKey:'id'})
  }
}

export { User };

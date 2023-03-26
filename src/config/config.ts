import { Dialect, Sequelize } from "sequelize";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "../../.env") });

const dbName = process.env.DB_NAME as string;
const dbUser = process.env.DB_USER as string;
const dbHost = process.env.DB_HOST;
const dbDriver = process.env.DB_DRIVER as Dialect;
const dbPassword = process.env.DB_PASSWORD;

const Connection: Sequelize = new Sequelize(dbName, dbUser, dbPassword, {
  host: dbHost,
  dialect: dbDriver,
});

Connection.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

import { User } from "../moduals/User/model/User";
import { Role } from "../moduals/User/model/Role";
import { RoomType } from "../moduals/room/model/RoomType";
import { RoomDetails } from "../moduals/room/model/RoomDetails";

//model connetions

User.init(Connection);
Role.init(Connection);
RoomType.init(Connection);
RoomDetails.init(Connection)

User.associate(Role)

User.hasOne(Role, {foreignKey: "id"});
Role.hasMany(User,{foreignKey:"role_id"})

RoomDetails.hasMany(User, { foreignKey: 'id', sourceKey: 'user_id' })
User.hasMany(RoomDetails, { foreignKey: 'user_id', sourceKey: 'id' })

RoomType.hasMany(RoomDetails, { foreignKey: 'room_type_id', sourceKey: "id" })

export default Connection;

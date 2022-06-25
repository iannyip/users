// 1. Import NPM libraries
import sequelizePackage from "sequelize";

// 2. Import config for database to initialize Sequelize obj
import allConfig from "../config/config.js";

// 3. Import models
import initUserModel from "./userModel.mjs";

// 4. Initialize sequelize object
const { Sequelize } = sequelizePackage;
const env = process.env.NODE_ENV || "development";
const config = allConfig[env];
const db = {};

let sequelizeInstance = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

// 5. Initialize an object for each model. Store as attribute of db object
db.User = initUserModel(sequelizeInstance, Sequelize.DataTypes);
db.sequelize = sequelizeInstance;
db.Sequelize = Sequelize;

// 6. Export default db
export default db;

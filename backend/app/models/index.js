import {
  DB,
  USER,
  PASSWORD,
  HOST,
  dialect as _dialect,
  pool as _pool
} from "../config/db.config.js";
import Sequelize from "sequelize";
import { tutorialModel } from './tutorial.model.js';
import { campusModel } from "./campus.model.js";


export const sequelize = new Sequelize(DB, USER, PASSWORD, {
  host: HOST,
  dialect: _dialect,
  operatorsAliases: false,

  pool: {
    max: _pool.max,
    min: _pool.min,
    acquire: _pool.acquire,
    idle: _pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = tutorialModel(sequelize, Sequelize);
db.campuses = campusModel(sequelize, Sequelize);

export default db;

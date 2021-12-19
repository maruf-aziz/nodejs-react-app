import { Sequelize } from "sequelize";

const db = new Sequelize("node_test", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;

const Sequelize = require("sequelize");

// const db = new Sequelize(process.env.DATABASE_URL || "postgres://localhost:5432/messenger", {
//   logging: false
// });

const db = new Sequelize('messenger', 'hatchways_user', 'hatchways_password', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

module.exports = db;

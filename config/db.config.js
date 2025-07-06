const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME || "railway",
  process.env.DB_USER || "root",
  process.env.DB_PASSWORD || "your_password_here",
  {
    host: process.env.DB_HOST || "switchback.proxy.rlwy.net",
    port: process.env.DB_PORT || 41550,
    dialect: "mysql",
    logging: false, // Optional: disable query logs
  }
);

module.exports = sequelize;

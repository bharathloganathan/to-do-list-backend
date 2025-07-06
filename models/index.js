const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config");

// Initialize Sequelize
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  pool: dbConfig.pool,
});

// Import the Task model
const Task = require("./task.model")(sequelize, Sequelize);

// Export the models and Sequelize instance
module.exports = {
  sequelize,
  Task,
};

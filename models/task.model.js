// models/task.model.js
const { DataTypes } = require("sequelize");
const sequelize = require("../config/db.config");

const Task = sequelize.define(
  "Task",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    status: {
      type: DataTypes.ENUM("To Do", "In Progress", "Completed"),
      allowNull: false,
      defaultValue: "To Do",
    },
    deadline: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Task;

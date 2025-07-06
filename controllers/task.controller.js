const Task = require("../models/task.model");

// Create and Save a new Task
const create = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).send(task);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Task.",
    });
  }
};

// Retrieve all Tasks from the database
const findAll = async (req, res) => {
  try {
    const tasks = await Task.findAll();
    res.status(200).send(tasks);
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving tasks.",
    });
  }
};

// Find a single Task by ID
const findOne = async (req, res) => {
  try {
    const task = await Task.findByPk(req.params.id);
    if (task) {
      res.status(200).send(task);
    } else {
      res.status(404).send({
        message: `Cannot find Task with id=${req.params.id}.`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error retrieving Task with id=" + req.params.id,
    });
  }
};

// Update a Task by the ID
const update = async (req, res) => {
  try {
    const num = await Task.update(req.body, {
      where: { id: req.params.id },
    });

    if (num == 1) {
      res.send({
        message: "Task was updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update Task with id=${req.params.id}. Maybe Task was not found or req.body is empty!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Error updating Task with id=" + req.params.id,
    });
  }
};

// Delete a Task by ID
const deleteTask = async (req, res) => {
  try {
    const num = await Task.destroy({
      where: { id: req.params.id },
    });

    if (num == 1) {
      res.send({
        message: "Task was deleted successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete Task with id=${req.params.id}. Maybe Task was not found!`,
      });
    }
  } catch (err) {
    res.status(500).send({
      message: "Could not delete Task with id=" + req.params.id,
    });
  }
};

// Export all functions in one statement
module.exports = {
  create,
  findAll,
  findOne,
  update,
  deleteTask, // Use deleteTask instead of delete
};

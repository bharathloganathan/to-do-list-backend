const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import CORS middleware
const taskRoutes = require("./routes/task.routes");
const sequelize = require("./config/db.config");

const app = express();

app.use(cors()); // Use CORS middleware
app.use(bodyParser.json());
app.use("/api", taskRoutes);

// Test DB connection and sync models
sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
    return sequelize.sync(); // This creates the table if it doesn't exist (and does nothing if it does)
  })
  .then(() => {
    console.log("Database synchronized.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Start the server
const PORT = process.env.DB_PORT;

app.listen(PORT, 'mysql.railway.internal', () => {
  console.log(`Server is running on ${PORT}`);
});


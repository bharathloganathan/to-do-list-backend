require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const taskRoutes = require("./routes/task.routes");
const sequelize = require("./config/db.config");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", taskRoutes);

// Sequelize DB test and sync
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Connected to the database successfully.");
    return sequelize.sync();
  })
  .then(() => {
    console.log("✅ Database synchronized.");
  })
  .catch((err) => {
    console.error("❌ Unable to connect to the database:", err);
  });

// Start server
const PORT = process.env.PORT || 3005;
app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 Server is running on port ${PORT}`);
});

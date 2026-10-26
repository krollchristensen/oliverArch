const express = require("express");
const userRoutes = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = 3000;

app.use(express.json());

// Route layer: all user endpoints are grouped under /api/users
app.use("/api/users", userRoutes);

// Keep this after routes to catch propagated errors in one place
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

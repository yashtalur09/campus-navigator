const express = require("express");
const connectDB = require("./config");
const collegesRoute = require("./routes/colleges");
const cors = require("cors");
const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

app.use(cors());

// Routes
app.use("/api/colleges", collegesRoute); // Ensure this line mounts the colleges route

// Server Setup
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

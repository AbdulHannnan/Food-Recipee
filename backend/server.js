const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors")
require('dotenv').config();


app.use(express.json());
app.use(cors());
// Root route (optional)
app.get("/", (req, res) => {
  res.send("Welcome to the Food Recipie API 🍲");
});

const connectDB = require("./configue/connectionDB");
connectDB();

// Recipie routes
app.use("/recipie", require("./routes/recipie"));
app.use("/", require("./routes/user"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

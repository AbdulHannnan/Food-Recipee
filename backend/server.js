const express = require("express");
const app = express();
const PORT = 5000;


app.use(express.json());

// Root route (optional)
app.get("/", (req, res) => {
  res.send("Welcome to the Food Recipie API 🍲");
});

const connectDB = require("./configue/connectionDB");
connectDB();

// Recipie routes
app.use("/recipie", require("./routes/recipie"));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

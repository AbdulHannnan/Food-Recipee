const mongoose = require("mongoose");

const recipieSchema = mongoose.Schema({
  title: { type: String, required: true },
  ingredients: { type: Array, required: true },
  instructions: { type: String, required: true },
  time: { type: String },
  coverImage: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Recipie", recipieSchema);

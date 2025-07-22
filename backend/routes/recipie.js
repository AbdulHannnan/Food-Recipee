const express = require("express");
const router = express.Router();
const upload = require("../middleware/upload");

const {
  getRecipies,
  getRecipie,
  addRecipie,
  editRecipie,
  deleteRecipie
} = require("../controller/recipie");

// Get all recipes
router.get("/", getRecipies);

// Get a single recipe by ID
router.get("/:id", getRecipie);

// Add a new recipe (with image upload)
router.post("/", upload.single("file"), addRecipie);

// Edit a recipe by ID
router.put("/:id", upload.single("file"), editRecipie);

// Delete a recipe by ID
router.delete("/:id", deleteRecipie);

module.exports = router;

const express = require("express");
const router = express.Router();

const { getRecipies , getRecipie , addRecipie , editRecipie , deleteRecipie } = require("../controller/recipie");

router.get("/", getRecipies); // it will get all the recipie
router.get ("/:id" , getRecipie); // ite iwll get the recipie by theri id 
router.post("/" , addRecipie); // for adding the new recipie 
router.put("/:id" , editRecipie); // for editing the recipie by therir id
router.delete("/:id" , deleteRecipie); //for deleting the specific recipie by theri id


module.exports = router;

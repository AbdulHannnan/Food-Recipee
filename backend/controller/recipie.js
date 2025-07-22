const Recipies = require("../model/schema")


const getRecipies = async(req, res) => {
    const recipies = await Recipies.find()
    return res.json(recipies) 
};

const getRecipie = async(req, res) => {
  const recipie = await Recipies.findById(req.params.id)
  return res.json(recipie)
};

const addRecipie = async (req, res) => {
  const { title, ingredients, instructions, time } = req.body;

  if (!title || !ingredients || !instructions) {
    return res.status(400).json({ message: "Required fields can't be empty" });
  }

  const coverImage = req.file ? req.file.filename : null;

  const newRecipie = await Recipies.create({
    title,
    ingredients: Array.isArray(ingredients) ? ingredients : ingredients.split(','),
    instructions,
    time,
    coverImage
  });

  return res.status(201).json(newRecipie);
};




const editRecipie = async(req, res) => {
 const {title  , ingredients , instructions , coverImage} = req.body
 let recipie = await Recipies.findById(req.params.id)
try{
     if(recipie){
    await Recipies.findByIdAndUpdate(req.params.id , req.body , {new : true})
    res.json({title  , ingredients , instructions , coverImage})
 }
}
catch(err){
    return res.status(404).json({message : "Id is not present in the database"})
}
};

const deleteRecipie = (req, res) => {
  res.send("Server is working ✅");
};

module.exports = { getRecipies , getRecipie, addRecipie , editRecipie , deleteRecipie };

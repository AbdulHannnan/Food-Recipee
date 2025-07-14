const Recipies = require("../model/schema")


const getRecipies = async(req, res) => {
    const recipies = await Recipies.find()
    return res.json(recipies) 
};

const getRecipie = async(req, res) => {
  const recipie = await Recipies.findById(req.params.id)
  return res.json(recipie)
};

const addRecipie = async(req, res) => {
  const {title  , ingredients , instructions , coverImage} = req.body

  if(!title  || !ingredients || !instructions){
    res.json({message : "Required fields can't be empty"})
  }

  const newRecipie= await Recipies.create({
    title , ingredients , instructions , coverImage
  })

  return res.json(newRecipie);

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

// controller/user.js

const User = require("../model/user"); // 🔁 CHANGED from 'user' to 'User'
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignUp = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and Password are required" });
  }

  let existingUser = await User.findOne({ email }); // ✅ using model correctly

  if (existingUser) {
    return res.status(400).json({ error: "Email already existed" });
  }

  const hashpass = await bcrypt.hash(password, 10);
  const newUser = await User.create({ email, password: hashpass }); // ✅ using model correctly

let token = jwt.sign(
  { email, id: newUser._id },
  process.env.SECRET_KEY, // ✅ correct name
  { expiresIn: "1h" }      // ✅ also use "1h" not "1hr"
);

  return res.status(200).json({ newUser, token });
};

const userLogin = async (req, res) => {
  // your logic here later
};

const getUser = async (req, res) => {
  // your logic here later
};

module.exports = { userSignUp, userLogin, getUser };

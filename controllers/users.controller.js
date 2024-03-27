const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "3d",
  });
}

const register = async (req, res) => {
 const { name, email, password } = req.body;

try {
  const oldUser = await User.findOne({ email : email });
  if(oldUser) {
    return res.status(400).json({ message: "User already exists" });
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = await new User({
    name,
    email,
    password : hashedPassword,
  });

  await newUser.save();

  const token = generateToken(newUser._id);

  res.status(200).json({
    message: "User created successfully",
    token,
  });
} catch (error) {
  res.status(500).json({success: false, message: error.message });
}



};

const login = async (req, res) => {
 const { email, password } = req.body;

 if(!email || !password) {
   return res.status(400).json({ message: "Please enter all fields" });
 }
 try {
  const oldUser = await User.findOne({ email : email });
  if(!oldUser) {
    return res.status(404).json({ message: "User does not exist" });
  }
  const isPasswordCorrect = await bcrypt.compare(password, oldUser.password);
  if(!isPasswordCorrect) {
    return res.status(400).json({ message: "Invalid credentials" });
  }
  res.status(200).json({
    success: true,
    message: "User logged in successfully",
    token: generateToken(oldUser._id),
  })
 } catch (error) {
    res.status(500).json({ success: false, message: error.message });
 }
};

const logout = async (req, res) => {
  res.status(200).json({ message: "User logged out successfully" });
};

module.exports = {
  register,
  login,
  logout,
};
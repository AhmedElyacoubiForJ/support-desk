const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

const User = require("../models/userModel")

// @desc    Register a new user
// @route   /api/users/register
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    //return res.status(400).json({ msg: "Please enter all fields" });
    res.status(400);
    throw new Error("Please include all fields");
  }

  // Find if the user is already exists
  const userExists = await User.findOne({ email: email });

  if(userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create the user
  const user = await User.create({
    name: name,
    email: email,
    password: hashedPassword,
  });

  // if user created
  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      // isAdmin: user.isAdmin,
    }) 
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }

  //res.send("Register Route");
});

// @desc    Login a user
// @route   /api/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  res.send("Login Route");
});

module.exports = {
  registerUser,
  loginUser,
};

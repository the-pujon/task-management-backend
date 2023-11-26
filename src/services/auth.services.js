const User = require("../models/User");
const jwt = require("jsonwebtoken");

// Register a new user
exports.registerUser = async (userData) => {
  console.log("here");
  const { username, password } = userData;
  const existingUser = await User.findOne({ username });

  if (existingUser) {
    throw new Error("Username already exists");
  }

  const user = new User({ username, password });
  await user.save();
};

// Login
exports.loginUser = async (userData) => {
  const { username, password } = userData;
  const user = await User.findOne({ username });

  if (!user || !(await user.comparePassword(password))) {
    throw new Error("Invalid username or password");
  }

  const token = user.generateToken();
  return token;
};

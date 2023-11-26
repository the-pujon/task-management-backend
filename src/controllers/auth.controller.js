const User = require("../models/User");

// Register a new user
exports.register = async (req, res) => {
  console.log(req.body); // Log the request body for debugging
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "Username already exists" });
    }

    const user = new User({ username, password });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.log(error); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Login
exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ error: "Invalid username or password" });
    }

    const token = user.generateToken();

    res.json({ token });
  } catch (error) {
    console.log(error); // Log the error for debugging
    res.status(500).json({ error: "Internal Server Error" });
  }
};

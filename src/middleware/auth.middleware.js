const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    console.log("Received token:", token);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded.userId);
    const user = await User.findById({
      _id: decoded.userId,
    });
    console.log(user);

    if (!user) {
      throw new Error();
    }

    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).json({ error: "Authentication failed" });
  }
};

module.exports = authMiddleware;

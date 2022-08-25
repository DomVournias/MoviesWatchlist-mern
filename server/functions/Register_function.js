const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../models/User_model");

module.exports = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.status(400);
      throw new Error("Please fill all the required information.");
    }

    // Check if username exists
    const usernameExists = await User.findOne({ username });
    if (usernameExists)
      return res.status(400).json({ msg: "This username already exists." });

    // Check if email exists
    const emailExists = await User.findOne({ email });
    if (emailExists)
      return res.status(400).json({ msg: "This email already exists." });

    // Check passwords length
    if (password.length < 6)
      return res
        .status(400)
        .json({ msg: "Password must be at least 6 characters." });

    // bcryptjs hashing password from req
    const passwordHash = await bcrypt.hash(password, 12);

    const newUser = new User({
      username,
      email,
      password: passwordHash, // attaching bcrypt
    });

    const access_token = createAccessToken({ id: newUser._id });
    const refresh_token = createRefreshToken({ id: newUser._id });

    res.cookie("refreshtoken", refresh_token, {
      httpOnly: true,
      path: "/api/refresh_token",
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
    });

    await newUser.save();

    res.json({
      msg: "User has been created!",
      access_token,
      user: {
        ...newUser._doc,
        password: "",
      },
    });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

const createAccessToken = (payload) => {
  return jwt.sign(
    payload,
    config.get("ACCESS_TOKEN_SECRET", { expiresIn: "1d" })
  );
};

const createRefreshToken = (payload) => {
  return jwt.sign(
    payload,
    config.get("REFRESH_TOKEN_SECRET", { expiresIn: "30d" })
  );
};

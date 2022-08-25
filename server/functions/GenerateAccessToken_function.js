const config = require("config");
const jwt = require("jsonwebtoken");
const User = require("../models/User_model");

module.exports = async (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;
    if (!rf_token) return res.status(400).json({ msg: "No token found!" });

    jwt.verify(
      rf_token,
      config.get("REFRESH_TOKEN_SECRET"),
      async (err, result) => {
        if (err) return res.status(400).json({ msg: "Please login again." });

        const user = await User.findById(result.id).select("-password");

        if (!user)
          return res.status(400).json({ msg: "This user does not exists" });

        const access_token = createAccessToken({ id: result.id });

        res.json({ access_token, user });
      }
    );
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

module.exports = async (req, res) => {
  try {
    res.clearCookie("refreshtoken", { path: "/api/refresh_token" });
    return res.json({ msg: "Logged out!" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

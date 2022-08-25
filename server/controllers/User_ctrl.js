const mongoose = require("mongoose");

var Film = mongoose.model("Film");
var User = mongoose.model("User");

const user_ctrl = {
  getUser: async (req, res) => {
    try {
      const user = await User.findOne({
        username: req.params.username,
      }).select("-password -isAdmin");

      if (!user) return res.status(400).json({ msg: "User does not exist." });

      res.json({ user });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateUser: async (req, res, next) => {
    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      next(err);
    }
  },
  deleteUser: async (req, res, next) => {
    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("User has been deleted.");
    } catch (err) {
      next(err);
    }
  },

  getUsers: async (req, res, next) => {
    try {
      const users = await User.find(req.params.id);
      res.status(200).json(users);
    } catch (err) {
      next(err);
    }
  },

  getUserFilms: async (req, res, next) => {
    try {
      const user = await User.find(req.params.username);
      const list = await Promise.all(
        user.films.map((film) => {
          return Film.findById(film);
        })
      );
      res.status(200).json(list);
    } catch (err) {
      next(err);
    }
  },
};

module.exports = user_ctrl;

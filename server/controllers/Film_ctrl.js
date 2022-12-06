const mongoose = require("mongoose");
const Film = require("../models/Film_model");
const User = require("../models/User_model");

class APIfeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  paginating() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 9;
    const skip = (page - 1) * limit;
    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

const film_ctrl = {
  getUserFilms: async (req, res) => {
    try {
      const features = new APIfeatures(
        Film.find({ user: req.params.id }),
        req.query
      ).paginating();
      const films = await features.query.sort("-createdAt");

      res.json({
        films,
        result: films.length,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  createFilm: async (req, res) => {
    try {
      // console.log(req.body);
      const { filmInfo, user } = req.body;
      console.log(user);

      const newFilm = new Film({
        name: filmInfo.name,
        year: filmInfo.year,
        poster: filmInfo.poster,
        imdbID: filmInfo.imdbID,
        user: user._id,
      });
      await newFilm.save();

      res.json({
        msg: "Created Film!",
        newFilm: {
          ...newFilm._doc,
          user: req.body.user,
        },
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  removeFilm: async (req, res) => {
    const userId = req.params.userid;
    try {
      await Film.findByIdAndDelete(req.params.filmId);
      try {
        await User.findByIdAndUpdate(userId, {
          $pull: { films: req.params.filmId },
        });
      } catch (err) {
        next(err);
      }
      res.status(200).json("User's film has been removed");
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  // updateFilm: async (req, res, next) => {
  //   try {
  //     const updatedFilm = await Film.findByIdAndUpdate(
  //       req.params.id,
  //       {
  //         $set: req.body,
  //       },
  //       { new: true }
  //     );
  //     res.status(200).json(updatedFilm);
  //   } catch (err) {
  //     next(err);
  //   }
  // },
  // deleteFilm: async (req, res, next) => {
  //   try {
  //     await Film.findByIdAndDelete(req.params.id);
  //     res.status(200).json("Film has been deleted.");
  //   } catch (err) {
  //     next(err);
  //   }
  // },
  // getFilm: async (req, res, next) => {
  //   try {
  //     const film = await Film.findById(req.params.id);
  //     res.status(200).json(film);
  //   } catch (err) {
  //     next(err);
  //   }
  // },
  // getFilms: async (req, res, next) => {
  //   try {
  //     const films = await Film.find(req.params.id);
  //     res.status(200).json(films);
  //   } catch (err) {
  //     next(err);
  //   }
  // },
};

module.exports = film_ctrl;

// saveFilm: async (req, res, next) => {
//   const userId = req.params.username;
//   console.log(username);
//   const newFilm = new Film(req.body);

//   try {
//     const savedFilm = await newFilm.save();

//     try {
//       await User.findByIdAndUpdate(userId, {
//         $push: { films: newFilm._id },
//       });
//     } catch (err) {
//       return res.status(400).json({ msg: err.message });
//     }
//     res.status(200).json(savedFilm);
//   } catch (err) {
//     return res.status(500).json({ msg: err.message });
//   }
// },

const mongoose = require("mongoose");

const FilmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  imdbID: {
    type: String,
    id: true,
    index: true,
    required: true,
  },
  user: {},
});

module.exports = mongoose.model("Film", FilmSchema);

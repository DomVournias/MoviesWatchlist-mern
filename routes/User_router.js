const express = require("express");
const film_ctrl = require("../controllers/Film_ctrl");
const user_ctrl = require("../controllers/User_ctrl");
const auth = require("../middleware/Auth_middleware");
const router = express.Router();

//! SAVE FILM
router.post("/user/:username", auth, film_ctrl.createFilm);
//! GET USER!
router.get("/user/:username", user_ctrl.getUser);
//! GET USER FILMS
router.get("/user_films/:id", film_ctrl.getUserFilms);
//! REMOVE USERS FILM
router.delete("/user_films/:userId/:filmId/remove", film_ctrl.removeFilm);
// GET ALL
router.get("/user/", auth, user_ctrl.getUsers);

module.exports = router;

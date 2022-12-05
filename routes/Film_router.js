const express = require("express");
const film_ctrl = require("../controllers/Film_ctrl");
const router = express.Router();

// //! SAVE FILM
// router.post("/films/save", film_ctrl.saveFilm);
//! CREATE FILM
router.post("/films/save", film_ctrl.createFilm);

module.exports = router;

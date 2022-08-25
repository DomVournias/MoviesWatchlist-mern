const express = require("express");
const auth_ctrl = require("../controllers/Auth_ctrl");

const router = express.Router();

router.post("/register", auth_ctrl.register);
router.post("/login", auth_ctrl.login);
router.post("/logout", auth_ctrl.logout);
router.post("/refresh_token", auth_ctrl.generateAccessToken);

module.exports = router;

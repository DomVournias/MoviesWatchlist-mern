const register_function = require("../functions/Register_function");
const login_function = require("../functions/Login_function");
const logout_function = require("../functions/Logout_function");
const generateAccessToken_function = require("../functions/GenerateAccessToken_function");

const auth_ctrl = {
  register: register_function,
  login: login_function,
  logout: logout_function,
  generateAccessToken: generateAccessToken_function,
};

module.exports = auth_ctrl;

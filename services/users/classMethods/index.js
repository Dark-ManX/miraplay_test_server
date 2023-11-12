const register = require("./register");
const logIn = require("./logIn");
const checkUser = require("./checkUser");
console.log("object", register);
module.exports = {
  register,
  logIn,
  checkUser,
};

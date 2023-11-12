const jwt = require("jsonwebtoken");
const { User } = require("../../../models");

const checkUser = async (req) => {
  const { authorization } = req;
  const [, token] = authorization;
  const decoded = jwt.decode(token);
  console.log("decoded", decoded);
};

module.exports = checkUser;

const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { User } = require("../../../models");

const { SECRET_KEY } = process.env;

const logIn = async ({ email, password }) => {
  const user = await User.findOne({ email });
  if (!user) {
    const error = new Error("Such user isn't exist");
    error.status = 401;
    throw error;
  }

  const checkPassword = await bcrypt.compare(password, user.password);
  if (!checkPassword) {
    const error = new Error("Wrong password");
    error.status = 401;
    throw error;
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });

  await User.findByIdAndUpdate(user._id, { token });

  return token;
};

module.exports = logIn;

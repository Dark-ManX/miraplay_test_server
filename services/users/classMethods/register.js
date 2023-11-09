const bcrypt = require("bcryptjs");
const { User } = require("../../../models");

const register = async (user) => {
  const { email, password } = user;

  const newUser = await User.findOne({ email });

  if (newUser) {
    const error = new Error("Such email is already present");
    console.log("error");
    error.status = 409;
    throw error;
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const result = await User.create({
    email,
    password: hashedPassword,
  });
  return result;
};

module.exports = register;

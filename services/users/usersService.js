const { register, logIn, checkUser } = require("./classMethods");

class UsersService {
  userRegistration = async (user) => await register(user);

  userLogIn = async (user) => await logIn(user);

  getUser = async (req) => await checkUser(req);
}

module.exports = new UsersService();

const { register } = require("./classMethods");

class UsersService {
  userRegistration = async (user) => await register(user);
}

module.exports = new UsersService();

const asyncHandler = require("express-async-handler");
const User = require("../../services/users");
const { userRegistration } = User;

class UsersController {
  registration = asyncHandler(async (req, res, next) => {
    const result = await userRegistration(req.body);
    console.log("result", result);
    res.status(201).json({ code: 201, status: "success", payload: result });
  });

  //   logIn = asyncHandler(async (req) => {
  //     const result = await userLogIn(req.body);
  //   });
}

module.exports = new UsersController();

const asyncHandler = require("express-async-handler");
const User = require("../../services/users");
const { userRegistration, userLogIn, getUser } = User;

class UsersController {
  registration = asyncHandler(async (req, res) => {
    const result = await userRegistration(req.body);
    res.status(201).json({ code: 201, status: "success", payload: result });
  });

  authenticate = asyncHandler(async (req, res) => {
    console.log("ctrl", req.body);
    const result = await userLogIn(req.body);
    res.status(200).json({ code: 200, status: "success", payload: result });
  });

  getUserInfo = asyncHandler(async (req, res) => {
    const result = await getUser(req.headers);
    const { email } = result;
    res.status(200).json({ code: 200, status: "success", payload: email });
  });
}

module.exports = new UsersController();

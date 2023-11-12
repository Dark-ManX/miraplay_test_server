const express = require("express");
const router = express.Router();

const UsersController = require("../../controllers/users/");
const { registration, authenticate, getUserInfo } = UsersController;

// console.log("object", registration);

router.post("/signUp", registration);
router.post("/signIn", authenticate);
router.get("/getUser", getUserInfo);

module.exports = router;

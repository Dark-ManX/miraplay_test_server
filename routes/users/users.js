const express = require("express");
const router = express.Router();

const UsersController = require("../../controllers/users/");
const { registration } = UsersController;

// console.log("object", registration);

router.post("/signUp", registration);
// router.post("/signin");

module.exports = router;

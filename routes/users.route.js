const express = require("express");
const usersController = require("../controllers/users.controller.js");

const router = express.Router();

router.route("/register").post(usersController.register);

router.route("/login").post(usersController.login);

router.route("/logout").post(usersController.logout);

module.exports = router;

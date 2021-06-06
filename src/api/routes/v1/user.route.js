const express = require("express");
const controller = require("../../controllers/user.controller");
const validate = require("express-validation");
const { register } = require("../../validations/user.validation");

const router = express.Router();

router.route("/").post(validate(register), controller.createUser);
router.route("/").get(validate());

module.exports = router;

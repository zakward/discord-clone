const express = require("express");
const authRouter = express.Router();
const authController = require("../controllers/auth/authController");
const Joi = require("joi");
const validator = require("express-joi-validation").createValidator({});
const auth = require("../middleware/auth");
const registerSchema = Joi.object({
  username: Joi.string().min(3).max(12).required(),
  password: Joi.string().min(6).max(12).required(),
  mail: Joi.string().email().required(),
});

const loginSchema = Joi.object({
  password: Joi.string().min(6).max(12),
  mail: Joi.string().email(),
});

authRouter.post(
  "/register",
  validator.body(registerSchema),
  authController.controllers.postRegister
);
authRouter.post(
  "/login",
  validator.body(loginSchema),
  authController.controllers.postLogin
);

authRouter.get("/test", auth, (req, res) => {
  res.send("request passed");
});

module.exports = authRouter;

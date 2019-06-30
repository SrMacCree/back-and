const express = require("express");

const userRouter = express.Router();
const AuthController = require("../controllers/authController");

userRouter.post("/register", AuthController.register); //resgitra usuário
userRouter.post("/authenticate", AuthController.authenticate); //autentica o usuário

module.exports = userRouter;

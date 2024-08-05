const { Router } = require("express");

const usersControllers = require("../controllers/users");

const usersRouter = Router();

usersRouter.get("/signup", usersControllers.signup);
usersRouter.post("/login", usersControllers.login);

module.exports = usersRouter;

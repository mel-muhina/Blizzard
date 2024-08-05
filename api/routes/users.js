const { Router } = require("express");

const usersRouter = Router();

usersRouter.get("/signup");
usersRouter.post("/login");

module.exports = usersRouter;

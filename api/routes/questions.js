const { Router } = require("express");

const questionsRouter = Router();

questionsRouter.get("/");
questionsRouter.get("/:eventId");

module.exports = questionsRouter;

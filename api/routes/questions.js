const { Router } = require("express");

const questionsRouter = Router();

questionsRouter.get("/");
questionsRouter.get("/event/:id");
questionsRouter.post("/");
questionsRouter.patch();

module.exports = questionsRouter;

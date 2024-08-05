const { Router } = require("express");

const eventsRouter = Router();

questionsRouter.get("/:characterName", characterController.index);

module.exports = eventsRouter;

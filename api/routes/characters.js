const { Router } = require("express");
const charactersController = require("../controllers/character");

const characterRouter = Router();

// characterRouter.get("/");
characterRouter.get("/:id", charactersController.show);

module.exports = characterRouter;

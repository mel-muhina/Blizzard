const { Router } = require("express");

const submissionsRouter = Router();

submissionsRouter.post("/", submissionsController.create);
submissionsRouter.get("/", submissionsRouter.show);

module.exports = submissionsRouter;

const { Router } = require("express");

const submissionsController = require("../controllers/submissions");
const submissionsRouter = Router();

submissionsRouter.post("/", submissionsController.create);
submissionsRouter.get("/", submissionsController.show);

module.exports = submissionsRouter;

const { Router } = require("express");
const authenticator = require("../middleware/authenticator");
const submissionsController = require("../controllers/submissions");

const submissionsRouter = Router();

submissionsRouter.use(authenticator);

submissionsRouter.post("/", submissionsController.create);
submissionsRouter.get("/", submissionsController.show);

module.exports = submissionsRouter;

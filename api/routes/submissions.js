const { Router } = require("express");
const authenticator = require("../middleware/authenticator");
const submissionsController = require("../controllers/submissions");

const submissionsController = require("../controllers/submissions");
const submissionsRouter = Router();

submissionsRouter.use(authenticator);

submissionsRouter.post("/", submissionsController.create);
<<<<<<< HEAD

// n
=======
submissionsRouter.get("/", submissionsController.show);
>>>>>>> b663489262d48ae113c03868f239165a5b80f448

module.exports = submissionsRouter;

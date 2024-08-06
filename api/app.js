const express = require("express");
const cors = require("cors");

const logger = require("./middleware/logger");

const questionsRouter = require("./routes/questions");
const usersRouter = require("./routes/users");
const authenticator = require("./middlewear/authenticator");
// const eventsRouter = require("./routes/events");
const charactersRouter = require("./routes/characters");
const eventsRouter = require("./routes/events");
const submissionsRouter = require("./routes/submissions");

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger);

app.get("/", (req, res) => {
  res.status(200).json({
    name: "History game",
    description: "Learn by being an advisor to the great figures of history",
  });
});

app.use("/users", usersRouter);
app.use("/questions", questionsRouter);
// app.use("/events", eventsRouter);
app.use("/characters", charactersRouter);
app.use("/events", eventsRouter);
app.use("/users", usersRouter);
app.use("/submissions", submissionsRouter);

module.exports = app;
